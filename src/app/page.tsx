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
          src={"/presentation-image.jpg"}
          alt="imagine de prezentare"
          fill
        />
        <div className={styles.presentation_text_section}>
          <h1 className={styles.presentation_text_company_name}>
            HouseHelp Hub
          </h1>
          <h2 className={styles.presentation_text_subtitle}>
            Găsește profesioniști cu ușurință - Profesioniștii Acasă
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
            Suntem o echipă dedicată care își propune să faciliteze procesul de
            găsire a serviciilor de care ai nevoie în mod rapid și eficient.
            Ne-am concentrat pe crearea unei platforme ușor de folosit, care
            conectează utilizatorii cu profesioniști din diverse domenii, pentru
            a oferi soluții la problemele tale casnice. Echipa noastră este
            mereu pregătită să te ajute să găsești cea mai bună soluție pentru
            nevoile tale.
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src={"/presentation_about_us.jpg"}
            width={500}
            height={500}
            alt="presentation image"
          />
        </div>
      </section>
      <section className={styles.why_us_presentation}>
        <h2 className={styles.title}>De ce</h2>
        <div className={styles.image}>
          <Image
            src={"/presentation_why_us.png"}
            width={500}
            height={500}
            alt="presentation image"
          />
        </div>
        <div className={styles.text_section}>
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
