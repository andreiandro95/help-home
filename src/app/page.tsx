import Image from "next/image";
import styles from "./../styles/homepage.module.css";
import Link from "next/link";
import { CiCircleCheck } from "react-icons/ci";

export default function Home() {
  return (
    <main className={styles.main_homepage}>
      <section className={styles.presentation_section}>
        <Image
          className={styles.bkg_image}
          src={"/homepage-page-img/presentation-image.png"}
          alt="imagine de prezentare"
          fill
        />
        <div className={styles.presentation_text_section}>
          <h1 className={styles.presentation_text_company_name}>
            ServiciiConectate: Încredere Rapidă
          </h1>
          <h2 className={styles.presentation_text_subtitle}>
            Descoperă soluții rapide! Înscrie-te ca furnizor sau client,
            evaluează și salvează preferințele tale într-un singur loc!
          </h2>
          <p className={styles.presentation_text}>
            Gaseste profesionistul perfect pentru tine!
          </p>
          <Link className={styles.to_services} href={"/servicii"}>
            Verifică ofertele
          </Link>
        </div>
      </section>
      <section className={styles.about_us_section}>
        <div className={styles.text}>
          <h3>Despre noi</h3>
          <p>
            Bine ați venit pe platforma noastră! Scopul acestei platforme este
            de a facilita găsirea rapidă și eficientă a serviciilor de care ai
            nevoie. Platforma a fost dezvoltată pentru a conecta utilizatorii cu
            profesioniști calificați din diverse domenii, asigurându-se că
            găsești cele mai bune soluții pentru nevoile tale casnice. Ne
            angajăm să oferim o experiență de utilizare excelentă și să
            sprijinim utilizatorii în fiecare pas al procesului. un spațiu
          </p>
          <p>
            Alătură-te nouă și descoperă cum putem colabora pentru a face viața
            mai ușoară!
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src={"/homepage-page-img/presentation_about_us.webp"}
            width={500}
            height={500}
            alt="presentation image"
          />
        </div>
      </section>
      <section className={styles.why_us_presentation}>
        <div className={styles.image}>
          <Image
            src={"/homepage-page-img/presentation_why_us.png"}
            width={500}
            height={500}
            alt="presentation image"
          />
        </div>
        <div className={styles.text_section}>
          <h2 className={styles.title}>De ce noi?</h2>
          <div className={styles.text_container}>
            <div className={styles.icon_check}>
              <CiCircleCheck />
            </div>
            <div className={styles.text}>
              <h3>Profesioniști calificați</h3>
              <p>
                Toți specialiștii sunt experți calificați în domeniile lor de
                activitate.
              </p>
            </div>
          </div>
          <div className={styles.text_container}>
            <div className={styles.icon_check}>
              <CiCircleCheck />
            </div>
            <div className={styles.text}>
              <h3>Recenzii de la clienți</h3>
              <p>
                Fiecare profesionist are recenzii lăsate de clienți mulțumiți,
                oferindu-ți o idee clară despre calitatea serviciilor.
              </p>
            </div>
          </div>
          <div className={styles.text_container}>
            <div className={styles.icon_check}>
              <CiCircleCheck />
            </div>
            <div className={styles.text}>
              <h3>Pagini personalizate</h3>
              <p>
                Fiecare specialist își prezintă serviciile, prețurile și locația
                pentru o alegere mai ușoară.
              </p>
            </div>
          </div>
          <div className={styles.text_container}>
            <div className={styles.icon_check}>
              <CiCircleCheck />
            </div>
            <div className={styles.text}>
              <h3>Conturi gratuite</h3>
              <p>
                Poți beneficia de toate avantajele platformei noastre fără
                costuri suplimentare.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
