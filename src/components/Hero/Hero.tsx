import { Box, Heading, VStack, Highlight, Text } from "@chakra-ui/react";
import { FetchVideo } from "../Video/FetchVideo";

export const Hero = () => {
  return (
    <Box bg="green.50" w="100%" h="xl">
      <VStack py="20" maxW="md" mx="auto" textAlign="center">
        <Heading>Keyword Extractor🔥</Heading>
        <Text fontWeight="semibold" fontSize="18px" pt="10px">
          <Highlight
            query="100% free"
            styles={{
              px: "1",
              py: "1",
              rounded: "md",
              bg: "green.200",
            }}
          >
            You can now extract keywords from any YouTube video. No
            restrictions, 100% free.
          </Highlight>
        </Text>
      </VStack>
      <FetchVideo />
    </Box>
  );
};
