import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import type { ReactNode } from "react";
import clsx from "clsx";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const [theme] = useTheme();
  return (
    <div className={clsx(theme)}>
      <div className="border-gray-200 bg-gray-100 text-gray-800 dark:border-gray-900 dark:bg-gray-900 dark:text-white">
        <Header />
        <main className="container mx-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
