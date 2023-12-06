import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={4} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center "} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See all
        </Text>
      </Flex>

      <SuggestedUser
        name="Dan Abramov"
        followers={1392}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Ryan Florence"
        followers={1487}
        avatar="https://bit.ly/ryan-florence"
      />
      <SuggestedUser
        name="Christian Nwamba"
        followers={759}
        avatar="https://bit.ly/code-beast"
      />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2023 Built by{" "}
        <Link
          href="https://github.com/NicDuplessy"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          Nicolas Duplessy
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
