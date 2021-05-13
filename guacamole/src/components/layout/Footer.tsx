import { Flex, Link, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://baskinnature.in" isExternal>
          baskinnature.in
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
