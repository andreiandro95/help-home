import SendContactEmailForm from "./components/SendContactEmailForm";
import styles from "@/styles/contact.module.css";

export default function Page() {
  return (
    <div className={styles["contact-page"]}>
      <h1 className={styles["contact-title"]}>Contact</h1>
      <section className={styles["contact-form-section"]}>
        <h3 className={styles["contact-form-title"]}>
          Nu ai găsit răspunsul? Contactează-ne!
        </h3>
        <SendContactEmailForm />
      </section>
      <section className={styles["faq-section"]}>
        <h3 className={styles["faq-section-title"]}>FAQ</h3>
        <div className={styles["faq-section-presentation"]}>
          <h4>Ce este ServiciiConectate?</h4>
          <p>
            ServiciiConectate este o platformă inovatoare fondată în 2023, care
            conectează furnizorii de servicii cu clienții din întreaga țară,
            simplificând căutarea și evaluarea acestora.
          </p>
        </div>
        <div className={styles["faq-section-presentation"]}>
          <h4>Cum pot deveni furnizor de servicii?</h4>
          <p>
            Pentru a deveni furnizor de servicii, trebuie să te înregistrezi pe
            platformă și să adaugi un anunț detaliat despre oferta ta.
          </p>
        </div>
        <div className={styles["faq-section-presentation"]}>
          <h4>Cum pot evalua furnizorii?</h4>
          <p>
            Clienții pot evalua furnizorii după finalizarea serviciului,
            contribuind astfel la crearea unei comunități bazate pe încredere și
            transparență.
          </p>
        </div>
      </section>
    </div>
  );
}
