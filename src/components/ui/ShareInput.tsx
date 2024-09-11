import React, { InputHTMLAttributes } from "react";
import styles from "@/styles/components/shareInput.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  register: any;
  name: string;
  type: string;
};

const ShareInput = ({
  label,
  error,
  register,
  name,
  type,
  ...rest
}: InputProps) => {
  return (
    <div className={styles["input-element"]}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        {...register(name)}
        {...rest}
      />
      {error && <p className={styles["input-error"]}>{error}</p>}
    </div>
  );
};

export default ShareInput;
