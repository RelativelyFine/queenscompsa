import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Circuitboard from "../components/Circuitboard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Queen&lsquo;s Compsa</title>
        <meta
          name="The Website Of 2023"
          content="Created by Compsa Webdev Team"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Circuitboard />
      <Navbar />
      <Footer />
    </div>
  );
}
