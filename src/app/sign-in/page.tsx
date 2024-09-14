import styles from "@/styles/signin.module.css";
import SignInForm from "./components/SignInForm";
import Link from "next/link";

export default async function Page() {
  return (
    <div className={styles["sign-in-page"]}>
      <div className={styles["sign-in-element"]}>
        <h2 className={styles["sign-in-title"]}>Conectare</h2>
        <SignInForm />
        <p className={styles["sign-in-paragraph"]}>
          Încă nu aveți un cont? Puteți crea unul.
        </p>
        <Link className={styles["sign-in-url"]} href={"/sign-up"}>
          Creare cont
        </Link>
      </div>
    </div>
  );
}
