import { Divider, Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction='column'>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider
        border='1'
        w={90}
        alignSelf='center'
        justifySelf='center'
        mt='10'
        mb='30' 
      />

      <Title />      
    </Flex>
  )
}
