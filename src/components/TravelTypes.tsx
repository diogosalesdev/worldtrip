import { Img } from "@chakra-ui/image";
import { HStack, Text, VStack,  } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <HStack
      mx={140}
      w={1160}
      h={145}
      alignSelf='center'
      align='center'
      justify='space-between'
    >
      <VStack as='a' href='/' textDecoration='none' w={158} h={145}>
        <Img src='cocktail.svg' w={85} h={85} />
        <Text>vida noturna</Text>
      </VStack>
      <VStack as='a' href='/' textDecoration='none' w={158} h={145}>
        <Img src='surf.png' w={85} h={85} />
        <Text>praia</Text>
      </VStack>
      <VStack as='a' href='/' textDecoration='none' w={158} h={145}>
        <Img src='building.png' w={85} h={85} />
        <Text>moderno</Text>
      </VStack>
      <VStack as='a' href='/' textDecoration='none' w={158} h={145}>
        <Img src='museum.png' w={85} h={85} />
        <Text>clássico</Text>
      </VStack>
      <VStack as='a' href='/' textDecoration='none' w={158} h={145}>
        <Img src='earth.png' w={85} h={85} />
        <Text>e mais...</Text>
      </VStack>
    </HStack>
  )
}