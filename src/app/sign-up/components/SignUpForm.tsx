"use client";

import ShareInput from "@/components/ui/ShareInput";
import React, { useEffect } from "react";
import styles from "@/styles/signup.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type SignUpFormElements = {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
  role: "FURNIZOR" | "CLIENT";
};

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

export const signUpSchema = z
  .object({
    email: z.string().email("Adresă de e-mail nevalidă"),
    name: z.string().min(1, "Numele este obligatoriu"),
    password: z
      .string()
      .min(8, "Parola trebuie să aibă cel puțin 8 caractere")
      .regex(passwordValidation, {
        message:
          "Parola dumneavoastră nu este validă: este necesar să conțină cel puțin o literă mare, o literă mică, un număr și un caracter special.",
      }),
    repeatPassword: z
      .string()
      .min(8, "Repetearea parolei trebuie să aibă cel puțin 8 caractere"),
    role: z.enum(["FURNIZOR", "CLIENT"], {
      errorMap: (issue, ctx) => {
        return { message: "Vă rugăm să selectați tipul de utilizator." };
      },
    }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Parolele trebuie să se potrivească.",
    path: ["repeatPassword"],
  });

const SignUpForm = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: SignUpFormElements) => {
      return axios.post("/api/register", data);
    },
    onError: (error) => {
      if (error.message.includes("409")) {
        toast.error("Contul există deja.");
      } else {
        toast.error("S-a întâmplat ceva. Încercați din nou mai târziu.");
      }
    },
    onSuccess: (data) => {
      if (data.status === 200) {
        toast.success("„Cont creat cu succes");
        router.refresh();
        reset();
      }
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormElements>({
    resolver: zodResolver(signUpSchema),
  });
  const onSubmit = (data: SignUpFormElements) => {
    mutate(data);
  };

  return (
    <form className={styles["sign-up-form"]} onSubmit={handleSubmit(onSubmit)}>
      <ShareInput
        label="E-mail*"
        name="email"
        type="text"
        placeholder="Adresă e-mail"
        register={register}
        error={errors.email?.message}
      />
      <ShareInput
        label="Parolă*"
        name="password"
        type="password"
        placeholder="Parolă"
        register={register}
        error={errors.password?.message}
      />
      <ShareInput
        label="Repetă parola*"
        name="repeatPassword"
        type="password"
        placeholder="Repetă parola"
        register={register}
        error={errors.repeatPassword?.message}
      />
      <ShareInput
        label="Nume*"
        name="name"
        type="text"
        placeholder="Nume"
        register={register}
        error={errors.name?.message}
      />
      <div className={styles["select-role-element"]}>
        <label htmlFor="role" className={styles["select-role-label"]}>
          Role
        </label>
        <select
          {...register("role")}
          id="role"
          className={styles["select-role"]}
        >
          <option value="">Selectează rolul tău</option>
          <option value="FURNIZOR">Furnizor de servicii</option>
          <option value="CLIENT">Client</option>
        </select>
        {errors.role && (
          <p className={styles["select-error"]}>{errors.role.message}</p>
        )}
      </div>
      <button
        className={styles["sign-up-button"]}
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Încărcare..." : "Înregistrează-te"}
      </button>
    </form>
  );
};

export default SignUpForm;
