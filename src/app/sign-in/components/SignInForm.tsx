import ShareInput from "@/components/ui/ShareInput";
import React from "react";
import styles from "@/styles/signin.module.css";

const SignInForm = () => {
  return (
    <form className={styles["sign-in-form"]}>
      <ShareInput
        label="E-mail"
        name="email"
        type="text"
        placeholder="E-mail address"
      />
      <ShareInput
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <button className={styles["sign-in-button"]} type="submit">
        Sign in
      </button>
    </form>
  );
};

export default SignInForm;
