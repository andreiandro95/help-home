"use client";

import ShareInput from "@/components/ui/ShareInput";
import React from "react";
import styles from "@/styles/signin.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

const schema = z.object({
  email: z.string().email("Adresă de e-mail nevalidă"),
  password: z.string().min(1, "Parola este necesară"),
});

type FormElements = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormElements>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormElements) => {
    const { email, password } = data;

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: "/",
      });

      if (!res?.ok && res?.error === "CredentialsSignin") {
        toast.error("Utilizator incorect");
        reset();
      }

      if (res?.ok && res.url) {
        toast.success("Acum sunteți autentificat");
        router.push(res.url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles["sign-in-form"]} onSubmit={handleSubmit(onSubmit)}>
      <ShareInput
        label="E-mail"
        name="email"
        type="text"
        placeholder="Adresă e-mail"
        register={register}
        error={errors.email?.message}
      />
      <ShareInput
        label="Parola"
        name="password"
        type="password"
        placeholder="Parola"
        register={register}
        error={errors.password?.message}
      />
      <button
        disabled={isSubmitting}
        className={styles["sign-in-button"]}
        type="submit"
      >
        {isSubmitting ? "Încărcare..." : "Conectare"}
      </button>
    </form>
  );
};

export default SignInForm;
