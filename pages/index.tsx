import Head from "next/head";
import { Header, InitHome, Sobre, Technologies } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meu Portifólio</title>
        <meta name="description" content="meu portifólio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="containerPage">
        <InitHome />
        <Sobre />
        <Technologies />
      </div>
    </div>
  );
}
