import { Box, Heading, Container, Center, Text} from '@chakra-ui/layout';
import CTASection from 'components/CTASection';
import HelperImage from 'components/HelperImage';
import SomeImage from 'components/SomeImage';
import SomeText from 'components/SomeText';
import React from 'react';
const Success = () => {
    return ( 
        <Box mb={8} w="full">
            <Heading mb={4} letterSpacing={1}>
                <Center>Thank You!</Center>
            </Heading>
            <SomeImage/>
            <Container>
                <SomeText text="We have received your response, It will apper on the Site after reviewing it by Our Team"/>
            </Container>
        </Box>
     );
}
 
export default Success;