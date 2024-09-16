import Image from "next/image";
import styles from "@/styles/despreNoi.module.css";

export default function Page() {
  return (
    <div className={styles["despre-noi-page"]}>
      <h1 className={styles["despre-noi-title"]}>Despre noi</h1>
      <section className={styles["despre-noi-section"]}>
        <p className={styles["despre-noi-presentation"]}>
          La ServiciiConectate, conectăm furnizorii de servicii cu clienții,
          promovând transparența și încrederea. Suntem dedicați inovației și
          asigurăm o experiență plăcută pentru toți utilizatorii noștri.
        </p>
        <div className={styles["despre-noi-images-container"]}>
          <Image
            src={"/despre-noi-page-img/electrician.jpg"}
            alt="electrician"
            width={320}
            height={213}
          />
          <Image
            src={"/despre-noi-page-img/plumber.jpg"}
            alt="instalator"
            width={320}
            height={213}
          />
          <Image
            src={"/despre-noi-page-img/cleaning.jpg"}
            alt="specialist în curățenie"
            width={320}
            height={213}
          />
        </div>
      </section>
      <section className={styles["our-mission-section"]}>
        <h3 className={styles["our-mission-title"]}>Misiunea noastră</h3>
        <p className={styles["our-mission-presentation"]}>
          La ServiciiConectate, misiunea noastră este de a transforma modul în
          care clienții și furnizorii de servicii interacționează, creând o
          platformă accesibilă și transparentă care să faciliteze conexiuni
          autentice. Ne propunem să oferim utilizatorilor instrumentele necesare
          pentru a găsi și evalua servicii de calitate, promovând în același
          timp o comunitate bazată pe încredere și colaborare. Prin inovație
          continuă și o atenție deosebită la nevoile utilizatorilor, ne angajăm
          să sprijinim atât furnizorii, cât și clienții, în căutarea soluțiilor
          de care au nevoie, asigurându-ne că fiecare experiență pe platforma
          noastră este plăcută și eficientă. Conectăm oameni și construim
          încredere în fiecare zi!
        </p>
        <div className={styles["our-mission-img"]}>
          <Image
            src={"/despre-noi-page-img/our-mission.jpg"}
            width={375}
            height={239}
            alt="misiunea noastră"
          />
        </div>
      </section>
      <section className={styles["our-vission-section"]}>
        <h3 className={styles["our-vission-title"]}>Viziunea noastră</h3>
        <p className={styles["our-vission-presentation"]}>
          La ServiciiConectate, ne propunem să transformăm modul în care oamenii
          accesează și aleg servicii de uz casnic, creând o comunitate bazată pe
          transparență, încredere și accesibilitate. Viziunea noastră este de a
          deveni cea mai apreciată platformă din țară pentru conectarea
          clienților cu furnizorii de servicii de calitate, facilitând
          interacțiunile și colaborările dintre aceștia. Credem că fiecare
          utilizator merită o experiență plăcută și eficientă, motiv pentru care
          investim constant în inovație și îmbunătățire. Ne dorim să fim un
          partener de încredere în fiecare pas al căutării serviciilor necesare,
          contribuind astfel la construirea unei comunități unite, unde fiecare
          membru se simte respectat și valorizat.
        </p>
        <div className={styles["our-vission-img"]}>
          <Image
            src={"/despre-noi-page-img/our-vission.jpg"}
            width={320}
            height={259}
            alt="viziunea noastră"
          />
        </div>
      </section>
    </div>
  );
}
