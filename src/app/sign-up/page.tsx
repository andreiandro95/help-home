import styles from "@/styles/signup.module.css";
import Link from "next/link";
import SignUpForm from "./components/SignUpForm";

export default function Page() {
  return (
    <div className={styles["sign-up-page"]}>
      <div className={styles["sign-up-element"]}>
        <h2 className={styles["sign-up-title"]}>Înregistrează-te</h2>
        <SignUpForm />
        <p className={styles["sign-up-paragraph"]}>Ai deja un cont?</p>
        <Link className={styles["sign-up-url"]} href={"/sign-in"}>
          Autentifică-te
        </Link>
      </div>
    </div>
  );
}
