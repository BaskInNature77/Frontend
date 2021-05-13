import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Text } from "@chakra-ui/layout";
type SomeTextProps ={
text?:string
}
const SomeText = ({text}: SomeTextProps) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        backgroundColor={colorMode === "light" ? "gray.50" : "gray.500"}
        padding={4}
        borderRadius={4}
      >
        <Box d="flex" alignItems="center" fontSize="sm">
          
          <Text fontSize="2xl">{text}</Text>

        </Box>
      </Box>
    </>
  );
};

export default SomeText;
