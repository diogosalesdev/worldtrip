import { Img } from "@chakra-ui/image";
import { HStack, Text, VStack } from "@chakra-ui/layout";

export function TravelTypes() {
  return (
    <HStack w={1160} h={145}>
      <VStack>
        <Img src='cocktail.svg' w={85} h={85} />
        <Text>vida noturna</Text>
      </VStack>
    </HStack>
  )
}