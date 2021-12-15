import type { NextPage } from "next";
import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import { Stack } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import ImageView from "../components/imageView";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>스터디보드</title>
        <meta name="description" content="스터디 모집 게시판" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Heading className={styles.title}>
          <a href="#"> 스터디보드</a>
          <a href="/write"><EditIcon w={8} h={6} color="green.500"/></a>
        </Heading>
        <Stack spacing={8}>
          <ImageView />
          <ImageView />
          <ImageView />
          <ImageView />
          <ImageView />
          <ImageView />
          <ImageView />
        </Stack>
      </main>

      <footer className={styles.footer}>
        <a href="https://www.github.com/wem519">Powered by{" WooM"}</a>
      </footer>
    </div>
  );
};

