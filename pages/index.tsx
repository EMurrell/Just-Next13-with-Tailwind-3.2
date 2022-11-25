import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="px-2">
      <Head>
        <title>Next13 with TailwindCSS</title>
        <meta name="description" content="create next app w/ tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-full flex flex-col justify-center items-center py-16"></main>
    </div>
  );
}
