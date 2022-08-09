import { Flex, Heading } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Banner } from "../Components/Banner";
import { Header } from "../Components/Header";
import { Separator } from "../Components/Separator";
import { Slider } from "../Components/Slider";
import { TravelTypes } from "../Components/TravelTypes";
import { getPrismicClient } from "../services/prismic";

export interface ContinentProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

export default function Home({ continents }: ContinentProps) {
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

      <Slider continents={continents} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async() => {

  const prismic = getPrismicClient();

  const response = await prismic.getByType("continent");

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.slider_image.url
    }
  })

  return {
    props: {
      continents
    },
    revalidate: 1800,
  }
}
