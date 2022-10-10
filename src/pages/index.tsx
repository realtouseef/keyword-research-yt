import type { NextPage } from "next";
import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Box maxW="8xl" mx="auto" textAlign="center" mt="20px">
      <Head>
        <title>NextJS, Chakra-ui, TypeScript template🤩</title>
      </Head>

      <Heading>NextJS, Chakra-ui, TypeScript template🤩</Heading>
    </Box>
  );
};

export default Home;
