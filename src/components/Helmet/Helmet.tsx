import Head from "next/head";

export default function Helmet() {
  return (
    <Head>
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-5LGQ62V141"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-5LGQ62V141');
      </script>

      <title>Michał Gołda</title>
      <meta charSet="utf-8" />
      <meta name="revisit-after" content="1 day" />
      <meta name="author" content="Michał Gołda" />
      <meta
        name="description"
        content="Witaj na mojej personalnej stronie internetowej! Jestem Michał, pasjonuje się programowaniem i tworzeniem stron internetowych. Znajdziesz tutaj moje portfolio z zrealizowanymi projektami, które świadczą o moich umiejętnościach i pasji. Jeśli potrzebujesz wsparcia w zakresie tworzenia stron internetowych, aplikacji webowych lub chcesz porozmawiać o współpracy, skontaktuj się ze mną."
      />
      <meta
        name="keywords"
        content="Full-stack developer, Portfolio, Tworzenie stron internetowych, Tworzenie aplikacji webowych, Optymalizacja stron internetowych, Programowanie, UX, UI"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta
        name="google-site-verification"
        content="iGm5ckXvDyitftCfUi6T0DLfXc20aaThtTi40OrxzTM"
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
