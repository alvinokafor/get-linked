import Head from "next/head";
import Navbar from "../partials/navbar";
import Footer from "../partials/footer";

interface ILayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function AppLayout({ title, children }: ILayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

AppLayout.defaultProps = {
  title: "Get Linked",
};
