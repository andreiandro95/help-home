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
  role: "PROVIDER" | "CUSTOMER";
};

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

export const signUpSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    name: z.string().min(1, "Name is required"),
    password: z
      .string()
      .min(8, "Password must be 8 characters long")
      .regex(passwordValidation, {
        message:
          "Your password is not valid: require at least one uppercase letter, one lowercase letter, one number and one special character",
      }),
    repeatPassword: z
      .string()
      .min(8, "Repeat password must be at least 6 characters"),
    role: z.enum(["PROVIDER", "CUSTOMER"], {
      errorMap: (issue, ctx) => {
        return { message: "Please select your user type" };
      },
    }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords must match",
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
        toast.error("Account already exists");
      } else {
        toast.error("Something happen. Try again later");
      }
    },
    onSuccess: (data) => {
      if (data.status === 200) {
        toast.success("Account created succesfully");
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
        placeholder="E-mail address"
        register={register}
        error={errors.email?.message}
      />
      <ShareInput
        label="Password*"
        name="password"
        type="password"
        placeholder="Password"
        register={register}
        error={errors.password?.message}
      />
      <ShareInput
        label="Repeat password*"
        name="repeatPassword"
        type="password"
        placeholder="Repeat password"
        register={register}
        error={errors.repeatPassword?.message}
      />
      <ShareInput
        label="Name*"
        name="name"
        type="text"
        placeholder="Name"
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
          <option value="">Select your role</option>
          <option value="PROVIDER">Service provider</option>
          <option value="CUSTOMER">Customer</option>
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
        {isPending ? "Loading..." : "Sign up"}
      </button>
    </form>
  );
};

export default SignUpForm;
