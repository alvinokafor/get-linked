import "@/styles/globals.css";
import { Montserrat, Unica_One } from "next/font/google";
import localFont from "next/font/local";
import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--monteserrat-font",
});
const unicaOne = Unica_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--unicaOne-font",
});
const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Variable.woff2",
  variable: "--clashDisplay-font",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`bg-body-bg ${clashDisplay.variable} ${unicaOne.variable} ${montserrat.variable}`}
    >
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </main>
  );
}
