import { Flex } from "@chakra-ui/react";
import { Cities } from "../../Components/Cities";
import { Content } from "../../Components/Content";
import { ContinentBanner } from "../../Components/ContinentBanner";
import { Header } from "../../Components/Header";

export default function Continent() {
  return(
    <Flex
      direction="column"
    >
      <Header />
      <ContinentBanner />

      <Flex
        direction="column"
        maxW="1160px"
        mx="auto"
        mb="10"
        px="1rem"
      >
        <Content />
        <Cities />
      </Flex>
    </Flex>
  );
}