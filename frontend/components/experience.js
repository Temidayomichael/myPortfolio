import { Box, Center, Flex, Heading, Icon, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { RiGenderlessFill } from 'react-icons/ri'

export default function Experience() {

    function SkillSection({ title,cert, date }) {
        return(
            <>
            <Text>{title}</Text>
            <Text>{date}</Text>
            <Text>{cert}</Text>
        </>
        )

    }

    return (
        <div className="content">
            <Box textAlign="center" mb="2" >
                <Flex justifyContent="center" pt="10">
                    <Text fontStyle="italic" fontSize="md" >Tech stack and life</Text>
                    <Text fontWeight="semibold" ml="1" color="black">......</Text>
                </Flex>
                <Box >
                    <Heading as="h1" fontWeight="bold" fontSize="4xl" >Skills & Experience</Heading>
                </Box>
            </Box>
            <SimpleGrid my="5" justifyContent="center" columns={3} spacing={10}>
                <Box px="3" height="250px">
                    <Flex>
                        <Text fontWeight="medium" fontSize="2xl" as="h2">Education</Text>
                        <Text fontWeight="semibold" mt="2" color="black">......</Text>
                    </Flex>
                   <SkillSection title="Holy Ghost Primary School" cert="Pri Cerificate" date="21 jan 2000 - 23 feb 2008" />
                   
                </Box>
                <Box px="3" height="250px">
                    <Flex>
                        <Text fontWeight="medium" fontSize="2xl" as="h2">Experience</Text>
                        <Text fontWeight="semibold" mt="2" color="black">......</Text>
                    </Flex>
                </Box>
                <Box px="3" height="250px">
                    <Flex>
                        <Text fontWeight="medium" fontSize="2xl" as="h2">My Skills</Text>
                        <Text fontWeight="semibold" mt="2" color="black">......</Text>
                    </Flex>
                </Box>
            </SimpleGrid>
        </div>
    )
}
