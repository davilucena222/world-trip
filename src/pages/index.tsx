import { Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../Components/Banner";
import { Header } from "../Components/Header";
import { Separator } from "../Components/Separator";
import { Slider } from "../Components/Slider";
import { TravelTypes } from "../Components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <Separator />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?<br />Então escolhe seu continente
      </Heading>

      <Slider />
    </Flex>
  )
}
