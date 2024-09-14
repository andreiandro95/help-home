import SendContactEmailForm from "./components/SendContactEmailForm";

export default function Page() {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <section>
        <h3>Nu ai găsit răspunsul? Contactează-ne!</h3>
        <SendContactEmailForm />
      </section>
      <section>
        <h3>FAQ</h3>
        <div>
          <h4>Ce este ServiciiConectate?</h4>
          <p>
            ServiciiConectate este o platformă inovatoare fondată în 2023, care
            conectează furnizorii de servicii cu clienții din întreaga țară,
            simplificând căutarea și evaluarea acestora.
          </p>
        </div>
        <div>
          <h4>Cum pot deveni furnizor de servicii?</h4>
          <p>
            Pentru a deveni furnizor de servicii, trebuie să te înregistrezi pe
            platformă și să adaugi un anunț detaliat despre oferta ta.
          </p>
        </div>
        <div>
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
