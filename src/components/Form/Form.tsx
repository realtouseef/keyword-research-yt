import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const Form = () => {
  return (
    <Box maxW="3xl" mx="auto">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1em"
          children="⭐"
        />
        <Input
          size="lg"
          variant="filled"
          placeholder="Enter YouTube video URL"
        />
      </InputGroup>
    </Box>
  );
};
