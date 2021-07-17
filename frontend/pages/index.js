import {
	Box,
	Divider,
	Flex,
	Stack,
	Text,
	Image,
	Button,
	Center,
	useColorMode,
	IconButton,
	Heading,
	Icon,
	Link,
	Container,
} from '@chakra-ui/react'
import Head from 'next/head'
import { HiOutlineDownload } from 'react-icons/hi'
import { FiFacebook, FiTwitter } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'
import { AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'
import Portfolio from '../components/portfolio'
//import ParticlesBg from 'particles-bg'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Scrollspy from 'react-scrollspy'
import Sticky from 'react-sticky-el'
import About from '../components/about'
import Contact from '../components/contact'
import Menu from '../components/inc/menu'
import SocialIcons from '../components/inc/socialIcons'

export default function Home() {
	const router = useRouter()

	function isActive(route) {
		console.log(router)
		if (route == router.asPath) {
			return 'active'
		} else return ''
	}
	const MotionBox = motion(Box)
	return (
		<>
			<Box className='svgBg' id='home' color='gray.200'>
				<Head>
					<title>Oladele Temidayo Michael | Portfolio</title>
					<link rel='icon' href='../img/dayo.jpeg' />
				</Head>
				<Box h='100vh' zIndex='1' bgImage="url('/img/homebg.svg')">
					<Menu />
					<Box>
						<Box>
							<Flex h="80vh">
								<Container d='flex' alignItems='center' maxWidth='5xl' h='100%'>
									<Box>
										<Text color='#D13F31'>👋 Hello, my name is</Text>
										<Text color='' fontSize={['lg', '2xl']}>
											Oladele Temidayo Michael
										</Text>
										<Heading
											fontFamily='times-roman'
											my='3'
											color='gray.200'
											fontSize={['3xl', '7xl']}>
											<Text d='flex'>
												UI/UX
												<Text ml='2' color='gray.400'>
													Designer.
												</Text>
											</Text>
											<Box d='flex' my='3'>
												<Text color='gray.400'>FullStack </Text>
												<Text ml='2'> Developer.</Text>
											</Box>
										</Heading>
										<Flex mt='10'>
											<Button
												mr='10'
												size='md'
												color='gray.800'
												colorScheme='gray'>
												Hire Me
											</Button>

											<Text as={Link} decoration='underline'>
												Download my CV
												<Icon as={HiOutlineDownload} />
											</Text>
										</Flex>
									</Box>
								</Container>
							</Flex>
						</Box>

          <SocialIcons />
					</Box>

					{/* <Flex left="0" right="0" pos="absolute" bg="#F6F4F2" top="90%" w="60%" mx="auto" borderRadius="5" h="200px" >
          <Center as={Text} m="auto" fontSize="5xl" color={mainColor} fontFamily="poppins" fontWeight="semibold" > Happy Clients</Center>
        </Flex>
       */}
				</Box>
			</Box>
			{/* <Box id='about' bg='gray.200' h='100vh'>
				<Portfolio />
			</Box>
			<Box id='works' h='100vh'>
				<Experience />
			</Box> */}

			<Box id='about' bg='gray.100' minH='100vh'>
				<About />
			</Box>
			<Box id='works' bg='#DEDBA7' minH='100vh'>
				<Portfolio />
			</Box>
			<Box id='contact' bg='gray.800' minH='100vh'>
				<Contact />
			</Box>
		</>
	)
}
