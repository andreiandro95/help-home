"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import styles from "./../styles/components/header.module.css";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = usePathname();
  const { data: session } = useSession();

  return (
    <header className={styles.header}>
      <h1 className={styles.logo_image_container}>
        <Link href={"/"}>
          <Image src={`/logo.png`} alt="logo" width={75} height={75} />
        </Link>
      </h1>
      <nav className={`${styles.navigation} ${menuOpen ? styles.active : ""}`}>
        <button
          className={styles.close_menu_mobile}
          onClick={() => setMenuOpen(false)}
        >
          <IoMdClose />
        </button>
        <Link
          className={`${styles.link} ${router === "/" && styles.link_active}`}
          onClick={() => setMenuOpen(false)}
          href={"/"}
          title="Pagina principală"
        >
          Pagina principală
        </Link>
        <Link
          className={`${styles.link} ${
            router === "/servicii" && styles.link_active
          }`}
          onClick={() => setMenuOpen(false)}
          href={"/servicii"}
          title="Servicii"
        >
          Servicii
        </Link>
        <Link
          className={`${styles.link} ${
            router === "/despre-noi" && styles.link_active
          }`}
          onClick={() => setMenuOpen(false)}
          href={"/despre-noi"}
          title="Despre noi"
        >
          Despre noi
        </Link>
        <Link
          className={`${styles.link} ${
            router === "/contact" && styles.link_active
          }`}
          onClick={() => setMenuOpen(false)}
          href={"/contact"}
          title="Contact"
        >
          Contact
        </Link>
        {session?.user ? (
          <Link
            className={`${styles.link} ${
              router === "/sign-in" && styles.link_active
            }`}
            onClick={() => setMenuOpen(false)}
            href={"/cont"}
            title="Autentificare"
          >
            Cont
          </Link>
        ) : (
          <Link
            className={`${styles.link} ${
              router === "/sign-in" && styles.link_active
            }`}
            onClick={() => setMenuOpen(false)}
            href={"/sign-in"}
            title="Autentificare"
          >
            Autentificare
          </Link>
        )}
      </nav>
      <button
        className={styles.open_menu_mobile}
        onClick={() => setMenuOpen(true)}
      >
        <GiHamburgerMenu />
      </button>
    </header>
  );
};

export default HeaderComponent;
