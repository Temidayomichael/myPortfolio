import { Box, Divider, Flex, Link, Stack, Text,Image, Button, Center, useColorMode, IconButton, Heading, Icon } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { HiOutlineDownload } from "react-icons/hi";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiMoonFill } from "react-icons/ri";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { emojify } from 'react-emojione';
import Clients from '../components/clients';
import What_i_offer from '../components/what_i_offer';
import Experience from '../components/experience';
//import ParticlesBg from 'particles-bg'

export default function Home() {
  const mainColor ="#00458B"
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
      <Box pt="0" h="100vh" position="relative" >
        <Stack w="1380px" m="auto" isInline justify="space-between"
          pt={5}
          
        >
          <Center as={Text} fontSize="lg" fontFamily="Poppins" fontWeight="extrabold" >
            OTM.
        </Center>
          <Center className="menus">
            <Box ml={5}> <Link href="#clients"><a className={isActive('/become_a_tutor')} >Clients</a></Link></Box>
            <Box ml={5}>  <Link href="#services" ><a className={isActive('/faq')} >Services</a></Link>    </Box>
            <Box ml={5}>  <Link href="#portfolio"><a className={isActive('/request')} >Portfolio</a></Link></Box>
        
            <Box ml={5}>  <Link href="#contact"><a className={isActive('/request')} >Contact</a></Link></Box>
        
         
          </Center>
          <Center>
            <IconButton icon={<RiMoonFill />} onClick={toggleColorMode}  >Toggle color</IconButton>
          </Center>
        </Stack>
        <Box  >
          <Box className="mycontainer"  >
            <Flex h="600px" >
          
              <Center w="650px" color="gray.300" pl="5" className="" bg="black">
                <Box>
          
                  <Text fontFamily="Poppins" fontSize="lg" >  👋 Hello World! I am</Text>
               
                  <Heading my="3" color="gray.200" fontFamily="Poppins" size="2xl">Oladele <br /> Temidayo Michael</Heading>
                  <Text fontFamily="Poppins" color="" fontSize="2xl" > UI/UX Designer & FullStack Developer</Text>
                  <Text color="gray.400">
                    Experienced Developer with a demostrated history of working in the Information Technology and services industry. <br />
                       Strong IT professional with Bsc Information Technology from Eastern Mediterrenean University, Turkey. <br />
                    Quick learner, Great team player and a Leader.
                 </Text>
                  <Flex mt="10">
                    <Button mr="10" color="black" colorScheme="gray" >Hire Me</Button>
                    <Text as={Link} decoration="underline"> Download my CV<Icon as={HiOutlineDownload} /> </Text>
                  </Flex>
                </Box>
              </Center>
              <Image classNmae="img" src="../img/dayo.jpeg" />
            </Flex>
          </Box>
          <Flex m="auto" mt="5" w="1380px">
            <IconButton
              variant="outline"
              colorScheme="blackAlpha"
              size="sm"
            
              aria-label="github"
              icon={<AiOutlineGithub />}
            />
            <IconButton
              variant="outline"
              size="sm"
              colorScheme="twitter"
              aria-label="twitter"
              icon={<FiTwitter />}
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
          
          
      
        {/* <Flex left="0" right="0" pos="absolute" bg="#F6F4F2" top="90%" w="60%" mx="auto" borderRadius="5" h="200px" >
          <Center as={Text} m="auto" fontSize="5xl" color={mainColor} fontFamily="poppins" fontWeight="semibold" > Happy Clients</Center>
        </Flex>
       */}
      </Box>
      <Box id="services" bg="" h="100vh">
        <What_i_offer />
      </Box>
      <Box id="clients" bg="gray.200" h="100vh">
        <Experience />
      </Box>
      <Box id="clients" h="100vh">
        <Clients />
      </Box>
      <Box id="portfolio" bg="gray.200" h="100vh">

      </Box>
      
      <Box id="contact" bg="black" h="100vh">

      </Box>
    </>
      
  )
}
