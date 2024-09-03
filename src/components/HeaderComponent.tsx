"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import styles from "./../styles/components/header.module.css";
import { usePathname } from "next/navigation";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = usePathname();

  return (
    <header className={styles.header}>
      <h1 className={styles.logo_image_container}>
        <Image src={`/logo.png`} alt="logo" width={75} height={60} />
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
          href={"/"}
          title="Homepage"
        >
          Homepage
        </Link>
        <Link
          className={`${styles.link} ${
            router === "/servicii" && styles.link_active
          }`}
          href={"/servicii"}
          title="Servicii"
        >
          Servicii
        </Link>
        <Link
          className={`${styles.link} ${
            router === "/despre-noi" && styles.link_active
          }`}
          href={"/despre-noi"}
          title="Despre noi"
        >
          Despre noi
        </Link>
        <Link
          className={`${styles.link} ${
            router === "/contact" && styles.link_active
          }`}
          href={"/contact"}
          title="Contact"
        >
          Contact
        </Link>
        <Link
          className={`${styles.link} ${
            router === "/autentificare" && styles.link_active
          }`}
          href={"/sign-in"}
          title="Autentificare"
        >
          Autentificare
        </Link>
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
