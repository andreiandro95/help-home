import styles from "@/styles/signin.module.css";
import SignInForm from "./components/SignInForm";
import Link from "next/link";

export default async function Page() {
  return (
    <div className={styles["sign-in-page"]}>
      <div className={styles["sign-in-element"]}>
        <h2 className={styles["sign-in-title"]}>Sign in</h2>
        <SignInForm />
        <p className={styles["sign-in-paragraph"]}>
          You don&apos;t have an account yet? You can create one.
        </p>
        <Link className={styles["sign-in-url"]} href={"/sign-up"}>
          Sign up
        </Link>
      </div>
    </div>
  );
}
