import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ContinentProps } from "../../pages";

export function Slider({ continents }: ContinentProps) {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        autoplay={{
          delay: 4000,
        }}
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.title}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url("${continent.image}")`}
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
              bgPosition="center"
            >
              <Link href={`/continent/${continent.slug}`}>
                <a>
                  <Heading
                    fontSize={["3xl", "4xl", "5xl"]}
                    color="gray.100"
                    fontWeight="bold"
                  >
                    {continent.title}
                  </Heading>
                  <Text
                    fontWeight="bold"
                    color="gray.300"
                    fontSize={["0.8rem", "1xl", "2xl"]}
                    mt={["2", "4"]}
                  >
                    {continent.summary}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}