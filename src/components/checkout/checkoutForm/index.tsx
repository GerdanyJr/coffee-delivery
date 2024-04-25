"use client";
import { InputText } from "@/components/UI/inputText";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { getAddressByCep } from "@/services/address";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormFields, schema } from "./schema";

export function CheckoutForm() {
  const { width } = useWindowDimensions();
  const isMobile = width < 1024;
  const {
    register,
    watch,
    clearErrors,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    async function getAddress(cep: string) {
      try {
        const address = await getAddressByCep(cep);
        setValue("city", address.city);
        setValue("compliment", address.compliment);
        setValue("district", address.district);
        setValue("rua", address.street);
        setValue("uf", address.uf);
        clearErrors("cep");
        clearErrors("city");
        clearErrors("compliment");
        clearErrors("district");
        clearErrors("rua");
        clearErrors("uf");
      } catch (error) {
        setError("cep", { message: "Cep não encontrado" });
      }
    }
    if (watch("cep").length === 8) {
      const timer = setTimeout(() => getAddress(watch("cep")), 500);
      return () => clearTimeout(timer);
    }
  }, [watch("cep")]);

  return (
    <form className="grid gap-2">
      <InputText
        placeholder="CEP"
        className="lg:w-2/5"
        required
        error={!!errors.cep}
        errorMessage={errors.cep?.message}
        type="number"
        {...register("cep")}
      />
      <InputText
        placeholder="Rua"
        required
        error={!!errors.rua}
        errorMessage={errors.rua?.message}
        {...register("rua")}
      />
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row">
        <InputText
          placeholder="Número"
          className="lg:w-2/5"
          required
          error={!!errors.number}
          errorMessage={errors.number?.message}
          type="number"
          {...register("number", { valueAsNumber: true })}
        />
        <InputText
          placeholder="Complemento"
          className="lg:pl-3 lg:w-3/5"
          error={!!errors.compliment}
          errorMessage={errors.compliment?.message}
          {...register("compliment")}
        />
      </div>
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row">
        <InputText
          placeholder="Bairro"
          className="lg:w-2/5"
          required
          error={!!errors.district}
          errorMessage={isMobile ? "Bairro não pode ser vazio!" : undefined}
          {...register("district")}
        />
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:w-3/5">
          <InputText
            placeholder="Cidade"
            className="lg:w-4/5 xl:w-2/3 lg:px-3"
            required
            error={!!errors.city}
            errorMessage={isMobile ? "Cidade não pode ser vazia!" : undefined}
            {...register("city")}
          />
          <InputText
            placeholder="UF"
            className="min-w-[60px] lg:w-1/5 xl:w-1/3"
            required
            error={!!errors.uf}
            errorMessage={isMobile ? "Por favor insira a UF" : undefined}
            {...register("uf")}
          />
        </div>
      </div>
    </form>
  );
}
