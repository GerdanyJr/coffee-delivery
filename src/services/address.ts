export async function getAddressByCep(cep: string): Promise<any> {
  let addressResponse;
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  addressResponse = await response.json();

  if ("bairro" in addressResponse) {
    addressResponse = {
      cep: addressResponse.cep,
      street: addressResponse.logradouro,
      compliment: addressResponse.complemento,
      district: addressResponse.bairro,
      city: addressResponse.localidade,
      uf: addressResponse.uf,
    };
    return addressResponse;
  } else {
    throw new Error("Cep não encontrado");
  }
}
