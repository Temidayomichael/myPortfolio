import { Box, Divider, Flex, Link, Stack, Text,Image, Button, Center, useColorMode, IconButton, Heading, Icon } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { HiOutlineDownload } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiMoonFill } from "react-icons/ri";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { emojify } from 'react-emojione';

export default function Home() {
  const router = useRouter()
  function isActive(route) {
        if (route == router.pathname) {
            return "active"
        }
        
  }
   const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Head>
        <title>Oladele Temidayo Michael | Portfolio</title>
        <link rel="icon" href="../img/dayo.jpeg" />
      </Head>
      <Box bg="gray.200">
      <Box h="100vh" className="mycontainer" >
        <Stack className="main-menu" isInline justify="space-between"
          w="100%"
          mx="auto"
          py={5}
          
        >
          <Center as={Text} fontFamily="Poppins" fontWeight="bold" >
            OTM
        </Center>
          <Center className="menus">
            <Box>  <Link href="/"><a className={isActive('/')} >About</a></Link>   </Box>
            <Box ml={5}>  <Link href="/request"><a className={isActive('/request')} >Portfolio</a></Link></Box>
            <Box ml={5}> <Link href="/become_a_tutor"><a className={isActive('/become_a_tutor')} >Clients</a></Link></Box>
            <Box ml={5}>  <Link href="/faq" ><a className={isActive('/faq')} >Services</a></Link>    </Box>
         
          </Center>
          <Center>

            <Button bg="black" color="white" mr="3"  >Hire Me</Button>
            <IconButton icon={<RiMoonFill />} onClick={toggleColorMode}  >Toggle color</IconButton>
          </Center>
        </Stack>
        <Divider borderColor="black" />
        <Box justify="center" className="mycontainer" alignContent="center" >
          <Center h="600px">
            <>
              <Box w="650px">
                <Text fontFamily="Poppins" fontSize="1xl" >  {emojify('👋')} Hello World! I am</Text>
               
                <Heading my="3" fontFamily="Poppins" size="3xl">Oladele <br /> Temidayo Michael</Heading>
                <Text fontFamily="Poppins" color="gray.600" fontSize="2xl" > UI/UX Designer & FullStack Developer</Text>
                <Text color="gray.700">
                  jhsucdbydcbdhybdhyc jhsucdbydcbdhybdhyc jhsucdbydcbdhybdhyc jhsucdbydcbdhybdhyc jhsucdbydcbdhybdhyc jhsucdbydcbdhybdhyc
                  jhsucdbydcbdhybdhyc jhsucdbydcbdhybdhyc jhsucdbydcbdhybdhyc jhsucdbydcbdhybdhyc jhsucdbydcbdhybdhyc
                  jhsucdbydcbdhybdhyc jhsucdbydcbdhybdhyc jhsucdbydcbdhybdhyc jhsucdbydcbdhybdhyc
                 </Text>
                <Flex mt="10">
                  <Button mr="10" bg="black" color="white"  >Hire Me</Button>
                  <Link> Download my CV<Icon as={HiOutlineDownload} /> </Link>
                </Flex>
              
              </Box>
            </>
            <Center m="auto" >
              <Image objectFit="fit" boxSize="350px" borderRadius="full" src="../img/dayo.jpeg" />
            </Center>
          </Center>
        </Box>
        <Flex>
          <IconButton
            variant="outline"
            colorScheme="blackAlpha"
              size="sm"
            
              aria-label="github"
            icon={<AiOutlineGithub />}
          />
          <IconButton
            variant="outline"
            colorScheme="red"
              size="sm"
            
              aria-label="Instagram"
            icon={<AiOutlineInstagram />}
          />
          <IconButton
            variant="outline"
            colorScheme="facebook"
            aria-label="Facebook"
              icon={<FiFacebook />}
              size="sm"
              
          />
          <IconButton
              variant="outline"
              size="sm"
            colorScheme="linkedin"
            aria-label="linkedIn"
            icon={<TiSocialLinkedin />}
          />
        </Flex>
        </Box>
        </Box>
    </>
      
  )
}
