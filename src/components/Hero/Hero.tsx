import { Box, Heading, VStack, Highlight, Text } from "@chakra-ui/react";
import { Form } from "../Form/Form";

export const Hero = () => {
  return (
    <Box bg="green.50" w="100%" h="xl">
      <VStack py="16" maxW="lg" mx="auto" textAlign="center">
        <Heading fontSize="5xl">Keyword Extractor🔥</Heading>
        <Text fontWeight="semibold" fontSize="20px" pt="10px">
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
      <Form />
    </Box>
  );
};
