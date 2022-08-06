import { Flex } from "@chakra-ui/react";
import Banner from "../Componentes/Banner";
import Header from "../Componentes/Header";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
    </Flex>
  )
}
