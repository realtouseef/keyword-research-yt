import { useState } from "react";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { debounce } from "lodash";
import { FetchVideoKeywords } from "../Video/FetchVideoKeywords";

export const Form: React.FunctionComponent = () => {
  const [search, setSearch] = useState<string>("");

  const handleInput = debounce((e) => {
    setSearch(e.target.value);
  }, 500);

  const id = search.substring(search.indexOf("=") + 1);
  const againId = id.substring(0, 11); // YT video id === 11 characters

  const endpoint = `${process.env.NEXT_PUBLIC_YT_VIDEOES}?part=snippet&id=${againId}&key=${process.env.NEXT_PUBLIC_API_KEY}`;

  // useEffect(() => {
  //   const parsedUrl = new URL(search);
  //   for (let key of parsedUrl.searchParams) {
  //     setSearch(parsedUrl.searchParams.get(key));
  //   }
  // }, [search]);
  return (
    <Box>
      <Box maxW="3xl" mx="auto" px={["20", "20", "0"]}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.25em"
            my="1"
          >
            ⭐
          </InputLeftElement>
          <Input
            size="lg"
            variant="filled"
            placeholder="Enter YouTube video URL"
            onChange={handleInput}
          />
        </InputGroup>
        <FetchVideoKeywords url={endpoint} />
      </Box>
    </Box>
  );
};
