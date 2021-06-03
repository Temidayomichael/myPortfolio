import { Img } from '@chakra-ui/image'
import { Box, Grid } from '@chakra-ui/layout'
import React from 'react'

export default function Portfolio() {
    return (
        <>
            <Grid templateColumns="repeat(2, 1fr)">
                
                <Box p="5" w="100%" h="300" bg="blue.500">
                <Img src='../img/elab.png' />
                </Box>
                <Box p="5" w="100%" h="300" bg="blue.200">
                 <Img src='../img/elab2.png' />    
                </Box>
                <Box p="5" w="100%" h="300" bg="red.400">
                 <Img src='../img/klasshour.png' />    
                </Box>
                <Box p="5" w="100%" h="300" bg="blue.900" >
                 <Img src='../img/klasshour2.png' />    
                </Box>
                <Box w="100%" h="300" bg="gray.400" />
                <Box w="100%" h="300" bg="blue.700" />
            </Grid>
        </>
    )
}
