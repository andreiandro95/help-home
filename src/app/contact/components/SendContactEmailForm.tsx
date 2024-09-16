"use client";

import React from "react";
import { toast } from "react-toastify";
import styles from "@/styles/contact.module.css";

const SendContactEmailForm = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("/api/sendContactEmail", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      if (response.status === 200) {
        toast.success("E-mail trimis cu success");
        const form = event.target as HTMLFormElement;
        form.reset();
      }
    } catch (err) {
      console.error(err);
      alert("Eroare, Te rog încearcă să trimiți din nou e-mail-ul.");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles["form-contact"]}>
        <input type="text" name="subject" placeholder="Subiect" required />
        <input type="text" name="name" placeholder="Nume" required />
        <input type="email" name="email" placeholder="Adresă e-mail" required />
        <textarea
          name="content"
          placeholder="Mesajul dumneavoastră"
          required
        ></textarea>
        <input type="submit" value="Trimite" />
      </form>
    </>
  );
};

export default SendContactEmailForm;
