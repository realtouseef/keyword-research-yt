import { Box, Button, Flex, Heading, Highlight, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

type YTProps = {
  id: string;
  snippet: {
    title: string;
    description?: string;
    tags: string[];
    thumbnails: {
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
};

export const FetchVideoKeywords = ({ url }: { url: string }): JSX.Element => {
  const { data, refetch } = useQuery(["ytData"], () =>
    fetch(url).then((res) => res.json())
  );

  function fetchKeywords() {
    return refetch();
  }

  return (
    <Box>
      <Button my="20px" onClick={fetchKeywords}>
        Search for keywords
      </Button>

      {data?.items.map(({ id, snippet }: YTProps) => {
        return (
          <Box key={id} my="40px">
            <Image
              src={snippet.thumbnails.high.url}
              alt={snippet.title}
              width={snippet.thumbnails.high.width}
              height={snippet.thumbnails.high.height}
            />
            <Heading fontSize="24px">{snippet.title}</Heading>
            <Box py="40px">
              <Flex alignItems="center" justifyContent="start">
                <Heading mr="10px" fontSize="30px">
                  Keywords:
                </Heading>
                <Highlight
                  query={
                    snippet?.tags?.length === 0
                      ? "No keywords found"
                      : `${snippet?.tags?.length} keywords found`
                  }
                  styles={{
                    px: "1",
                    py: "1",
                    rounded: "md",
                    bg: "green.200",
                  }}
                >
                  {snippet?.tags?.length === 0
                    ? "No keywords found"
                    : `${snippet?.tags?.length} keywords found`}
                </Highlight>
              </Flex>
              <Box>
                {snippet.tags ? (
                  snippet.tags.join(", ")
                ) : (
                  <Text>
                    The video&apos;s creator has not added any keywords. Check
                    for another video.
                  </Text>
                )}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
