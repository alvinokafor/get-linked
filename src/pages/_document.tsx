import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon.png"
        />
        <meta
          property="og:description"
          content="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. "
        />
        <meta name="keywords" content="hackathon, tech, getLinked" />
        <meta property="og:title" content="GetLinked Hackathon" />
        <meta name="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
