import type { NextPage } from "next";
import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Hero } from "@/components/Hero/Hero";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>YT Keyword Extractor</title>
      </Head>

      <Hero />
    </Box>
  );
};

export default Home;
