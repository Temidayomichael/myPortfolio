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
} from '@chakra-ui/react'
import Head from 'next/head'
import { HiOutlineDownload } from 'react-icons/hi'
import { FiFacebook, FiTwitter } from 'react-icons/fi'
import { TiSocialLinkedin } from 'react-icons/ti'
import { AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'
import Portfolio from '../components/portfolio'
//import ParticlesBg from 'particles-bg'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Scrollspy from 'react-scrollspy'
import Sticky from 'react-sticky-el'
import About from '../components/about'
import Contact from '../components/contact'

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
					<Sticky
						stickyStyle={{
							backgroundColor: '#1a202c',
							zIndex: '20',
						}}>
						<Stack
							w='1380px'
							m='auto'
							alignItems='center'
							isInline
							justify='space-between'
							py={4}>
							<Center
								color='white'
								as={Text}
								fontSize='xl'
								letterSpacing='10px'
								fontWeight='extrabold'>
								OTM.
							</Center>
							<Center className='menus' as={Text} color='gray.200'>
								<Scrollspy
									items={['home', 'about', 'works', 'contact']}
									currentClassName='active'>
									<Link ml={5} href='#home'>
										<a>Home</a>
									</Link>

									<Link ml={5} href='#about'>
										<a>About</a>
									</Link>

									<Link ml={5} href='#works'>
										<a>Works</a>
									</Link>

									<Link ml={5} href='#contact'>
										<a>Contact</a>
									</Link>
								</Scrollspy>
							</Center>
						</Stack>
					</Sticky>
					<Box>
						<Box className='mycontainer'>
							<Flex h='650px'>
								<Center w='650px' ml='40' className=''>
									<Box>
										<Text color='#D13F31'>👋 Hello, I am</Text>
										<Text color='' fontSize='2xl'>
											Oladele Temidayo Michael
										</Text>
										<Heading
											fontFamily='times-roman'
											my='3'
											color='gray.200'
											size='4xl'>
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
											<Button mr='10' color='gray.800' colorScheme='gray'>
												Hire Me
											</Button>
											<Text as={Link} decoration='underline'>
												Download my CV
												<Icon as={HiOutlineDownload} />
											</Text>
										</Flex>
									</Box>
								</Center>
							</Flex>
						</Box>
						<Flex m='auto' mt='5' w='1380px'>
							<IconButton
								variant='outline'
								colorScheme='gray'
								size='sm'
								aria-label='github'
								icon={<AiOutlineGithub />}
							/>
							<IconButton
								variant='outline'
								size='sm'
								colorScheme='twitter'
								aria-label='twitter'
								icon={<FiTwitter />}
							/>
							<IconButton
								variant='outline'
								colorScheme='red'
								size='sm'
								aria-label='Instagram'
								icon={<AiOutlineInstagram />}
							/>
							<IconButton
								variant='outline'
								colorScheme='facebook'
								aria-label='Facebook'
								icon={<FiFacebook />}
								size='sm'
							/>
							<IconButton
								variant='outline'
								size='sm'
								colorScheme='linkedin'
								aria-label='linkedIn'
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
			{/* <Box id='about' bg='gray.200' h='100vh'>
				<Portfolio />
			</Box>
			<Box id='works' h='100vh'>
				<Experience />
			</Box> */}

			<Box id='about' bg='gray.100' h='100vh'>
				<About />
			</Box>
			<Box id='works' bg='#DEDBA7' minH='100vh'>
				<Portfolio />
			</Box>
			<Box id='contact' bg='gray.800' h='100vh'>
				<Contact />
			</Box>
		</>
	)
}
