import { Box, Center, SimpleGrid,Icon, Text, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { RiComputerLine } from 'react-icons/ri';
import { SiAdobexd } from "react-icons/si";
import { BiAnalyse } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineDatabase } from "react-icons/ai";
import { HiOutlineDeviceMobile } from "react-icons/hi";

export default function What_i_offer() {
    return (
        <div className="content">
            <Box textAlign="center">
                <Flex justifyContent="center" pt="10">
                    <Text fontStyle="italic" fontSize="md" >Services</Text>
                    <Text fontWeight="extrabold" ml="1" color="gray.800">......</Text>
                </Flex>
                <Box >
                    <Heading as="h1" fontWeight="semibold" fontSize="4xl" >What I Offer</Heading>
                </Box>
            </Box>
            <SimpleGrid my="5" justifyContent="center" columns={3} spacing={10}>
                <Box px="3" bg="gray.800" rounded="md" height="250px">
                    <Box m="auto" bg="gray.50" roundedBottom='md' w="70px" h="70px">
                        <Center  > <Icon as={SiAdobexd} mt="4" w={8} h={8} /></Center>
                    </Box>
                    <Box my="4" color="gray.50">
                        <Text fontSize="xl"> UI/UX Design</Text>
                    </Box>
                     
                </Box>
                <Box px="3" bg="gray.50" rounded="md" height="250px">
                    <Box m="auto" color="gray.50" roundedBottom='md' bg="gray.800" w="70px" h="70px">
                        <Center  > <Icon as={RiComputerLine} mt="4" w={8} h={8} /></Center>
                    </Box>
                    <Box my="4">
                        <Text fontSize="xl">Web Development</Text>
                    </Box>
                </Box>
                <Box px="3" bg="gray.50" rounded="md" height="250px">
                    <Box m="auto" color="gray.50" roundedBottom='md' bg="gray.800" w="70px" h="70px">
                        <Center  > <Icon as={HiOutlineDeviceMobile} mt="4" w={8} h={8} /></Center>
                    </Box>
                    <Box my="4">
                        <Text fontSize="xl" >Mobile App Development</Text>
                    </Box>
                </Box>
                <Box px="3" bg="gray.50" rounded="md" height="250px">
                    <Box m="auto" color="gray.50" roundedBottom='md' bg="gray.800" w="70px" h="70px">
                        <Center  > <Icon as={AiOutlineDatabase} mt="4" w={8} h={8} /></Center>
                    </Box>
                    <Box my="4">
                        <Text fontSize="xl">Database Management & Programming</Text>
                    </Box>
                </Box>
                <Box px="3" bg="gray.50" rounded="md" height="250px">
                    <Box m="auto" color="gray.50" roundedBottom='md' bg="gray.800" w="70px" h="70px">
                        <Center  > <Icon as={BiAnalyse} mt="4" w={8} h={8} /></Center>
                    </Box>
                    <Box my="4">
                        <Text fontSize="xl">System Analysis & Design</Text>
                    </Box>
                </Box>
                <Box px="3" bg="gray.50" rounded="md" height="250px">
                    <Box m="auto" color="gray.50" roundedBottom='md' bg="gray.800" w="70px" h="70px">
                        <Center  > <Icon as={GiTeacher} mt="4" w={8} h={8} /></Center>
                    </Box>
                    <Box my="4">
                        <Text fontSize="xl">Consulting & Training</Text>
                    </Box>
                </Box>
            </SimpleGrid>
        </div>
    )
}
