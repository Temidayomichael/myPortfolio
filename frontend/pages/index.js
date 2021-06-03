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
import Portfolio from '../components/portfolio';
//import ParticlesBg from 'particles-bg'

export default function Home() {
  const mainColor = "#00458B"

  const router = useRouter()
  function isActive(route) {
    console.log(router)
        if (route == router.pathname) {
            return "active"
        }
        
  }

  return (
    <>
      <Box className="svgBg" id="home" color='gray.300'>
      <Head>
        <title>Oladele Temidayo Michael | Portfolio</title>
        <link rel="icon" href="../img/dayo.jpeg" />
      </Head>
      <Box h="100vh" position="relative" >
        <Stack w="1380px" m="auto"  isInline justify="space-between"
          pt={6}
          
        >
          <Center as={Text} fontSize="lg" fontWeight="extrabold" >
            OTM.
        </Center>
          <Center className="menus" as={Text} color='gray.400' >
            <Box ml={5}> <Link href="#home"><a className={isActive('/home')} >Home</a></Link></Box>
            <Box ml={5}> <Link href="#clients"><a className={isActive('/clients')} >Clients</a></Link></Box>
            <Box ml={5}>  <Link href="#services" ><a className={isActive('/faq')} >Services</a></Link>    </Box>
            <Box ml={5}>  <Link href="#portfolio"><a className={isActive('/request')} >Portfolio</a></Link></Box>
        
            <Box ml={5}>  <Link href="#contact"><a className={isActive('/contact')} >Contact</a></Link></Box>
            <Box ml={5}>  <Link href="#blog"><a className={isActive('/blog')} >Blog</a></Link></Box>
          </Center>
         
        </Stack>
        <Box >
          <Box className="mycontainer"  >
            <Flex h="600px" >
          
              <Center w="650px" pl="5" className="">
                <Box >
                    <Text size='lg'>👋 Hello, I am</Text>
                     <Text color="" fontSize="2xl" > Oladele Temidayo Michael </Text>
                    <Heading my="3" color="gray.200" size="2xl">
                      
                    <Text d="flex" >UI/UX <Text ml="2" color="gray.400"> Designer.</Text></Text>
                   <Box d="flex" my="3" > <Text color="gray.400">FullStack </Text> <Text ml="2"> Developer.</Text></Box>
                  </Heading>
                 
                  <Text mt="10" color="gray.400">
                    Experienced Developer with a demostrated history of working in the Information Technology and services industry. <br />
                       Strong IT professional with Bsc Information Technology from Eastern Mediterrenean University, Turkey. <br />
                    Quick learner, Great team player and a Leader.
                 </Text>
                  <Flex mt="10">
                    <Button mr="10" color="gray.800" colorScheme="gray" >Hire Me</Button>
                    <Text as={Link} decoration="underline"> Download my CV<Icon as={HiOutlineDownload} /> </Text>
                  </Flex>
                </Box>
              </Center>
              <Image classNmae="img" src="../img/dayo.jpeg" />
            </Flex>
          </Box>
          <Flex m="auto"  mt="5" w="1380px">
            <IconButton
              variant="outline"
              colorScheme="gray"
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
        </Box>
      <Box id="portfolio" bg="">
       <Portfolio />
      </Box>
      <Box id="" bg="gray.200" h="100vh">
         <What_i_offer />
      </Box>
      <Box id="services" h="100vh">
        <Experience />
       
      </Box>
      <Box id="review" bg="gray.200" h="100vh">
 <Clients />
      </Box>
      
      <Box id="contact" bg="gray.800" h="100vh">

      </Box>
    </>
      
  )
}
