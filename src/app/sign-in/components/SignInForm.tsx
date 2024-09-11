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
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
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
    formState: { errors },
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
        toast.error("Incorrect user");
        reset();
      }

      if (res?.ok && res.url) {
        toast.success("You are now logged in");
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
        placeholder="E-mail address"
        register={register}
        error={errors.email?.message}
      />
      <ShareInput
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
        register={register}
        error={errors.password?.message}
      />
      <button className={styles["sign-in-button"]} type="submit">
        Sign in
      </button>
    </form>
  );
};

export default SignInForm;
