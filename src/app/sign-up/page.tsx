import styles from "@/styles/signup.module.css";
import SignInForm from "../sign-in/components/SignInForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className={styles["sign-up-page"]}>
      <div className={styles["sign-up-element"]}>
        <h2 className={styles["sign-up-title"]}>Sign up</h2>
        <SignInForm />
        <p className={styles["sign-up-paragraph"]}>Already have an account?</p>
        <Link className={styles["sign-up-url"]} href={"/sign-in"}>
          Sign in
        </Link>
      </div>
    </div>
  );
}
