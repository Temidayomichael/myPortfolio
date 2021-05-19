import React from 'react'
import { Box, Divider, Flex, Link, Stack, Text,Image, Center, useColorMode, IconButton, Heading, Icon } from '@chakra-ui/react'

export default function Clients() {
    return (
        <>
            <Box fontFamily="poppins" textAlign="center">
        <Flex justifyContent="center"   pt="10">
            <Text  fontStyle="italic" fontSize="md" >Clients</Text>
            <Text fontWeight="extrabold" ml="1" color="black">......</Text>
             </Flex>
            <Box >
                    <Heading as="h1" fontWeight="semibold" fontSize="4xl" >Reviews</Heading>
                </Box>
                </Box>
       </>
    )
}
