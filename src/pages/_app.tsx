import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
