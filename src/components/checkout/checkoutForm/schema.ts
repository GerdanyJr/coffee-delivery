import { z } from "zod";

export interface FormFields {
  cep: string;
  rua: string;
  number: number;
  compliment: string;
  district: string;
  city: string;
  uf: string;
}
export const schema = z.object({
  cep: z
    .string({ required_error: "vazio" })
    .length(8, { message: "Cep inválido!" }),
  rua: z.string().min(5, { message: "A rua deve ter no minimo 5 caracteres" }),
  number: z.number({ invalid_type_error: "Número não pode ser vazio!" }),
  compliment: z.string().optional(),
  district: z.string().min(3, { message: "Por favor insira o bairro" }),
  city: z
    .string()
    .min(3, { message: "Cidade deve ter no mínimo 3 caracteres" }),
  uf: z.string().length(4),
});
