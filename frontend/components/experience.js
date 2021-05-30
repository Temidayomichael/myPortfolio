import { Box, Center, Divider, Flex, Heading, Icon, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { RiGenderlessFill } from 'react-icons/ri'

export default function Experience() {

    function SkillSection({ title,cert, date }) {
        return (
            <Box bg="gray.50" p="5" mt="5" >
             
                <Text fontSize="lg" >{title}</Text>
                   <Box color="gray.500" >
                    <Text my="2" fontSize="sm" bg="gray.100" pl="2" >{date}</Text>
                    <Text>{cert}</Text>
                </Box>
            </Box>
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
            <Flex my="5" justifyContent="space-between">
                
                <Box px="3" height="250px">
                    <Flex>
                        <Text fontWeight="medium" fontSize="2xl" as="h2">Education</Text>
                        <Text fontWeight="semibold" mt="2" color="black">......</Text>
                    </Flex>
                   <SkillSection title="Eastern Mediterranean University" cert=" Bachelor of Science Inofrmation Technology" date="Febuary 2017 - January 2021" />
                 
                    <SkillSection title="Acheivers University" cert="Master of Science Computer Science (in view) " date="January 2021 - Febuary 2022" />
                   
                </Box>
                <Box px="3" height="250px">
                    <Flex>
                        <Text fontWeight="medium" fontSize="2xl" as="h2">Experience</Text>
                        <Text fontWeight="semibold" mt="2" color="black">......</Text>
                    </Flex>
                       <SkillSection title="Eastern Mediterranean University" cert=" Bachelor of Science Inofrmation Technology" date="Febuary 2017 - January 2021" />
                 
                    <SkillSection title="Acheivers University" cert="Master of Science Computer Science (in view) " date="January 2021 - Febuary 2022" />
                   
                </Box>
                <Box px="3" height="250px">
                    <Flex>
                        <Text fontWeight="medium" fontSize="2xl" as="h2">My Skills</Text>
                        <Text fontWeight="semibold" mt="2" color="black">......</Text>
                    </Flex>
                       <SkillSection title="Eastern Mediterranean University" cert=" Bachelor of Science Inofrmation Technology" date="Febuary 2017 - January 2021" />
                 
                    <SkillSection title="Acheivers University" cert="Master of Science Computer Science (in view) " date="January 2021 - Febuary 2022" />
                   
                </Box>
            </Flex>
        </div>
    )
}
