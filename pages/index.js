import {
	Box,
	Divider,
	Flex,
	Stack,
	Text,
	Image,
	Button,
	Center,
	useDisclosure,
	FormControl,
	FormHelperText,
	FormLabel,
	FormErrorMessage,
	Input,
	Heading,
	Icon,
	Link,
	Container,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	SimpleGrid,
	ModalBody,
	ModalCloseButton,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberDecrementStepper,
	NumberIncrementStepper,
	Textarea,
	useToast,
} from '@chakra-ui/react'
import Head from 'next/head'
import { HiOutlineDownload } from 'react-icons/hi'
import Portfolio from '../components/portfolio'
//import ParticlesBg from 'particles-bg'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import About from '../components/about'
import Contact from '../components/contact'
import Menu from '../components/inc/menu'
import SocialIcons from '../components/inc/socialIcons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Axios from 'axios'
import { useState } from 'react'

export default function Home() {
	const router = useRouter()
	const toast = useToast()
	const [isLoading, setIsLoading] = useState(false)
	function isActive(route) {
		console.log(router)
		if (route == router.asPath) {
			return 'active'
		} else return ''
	}
	const MotionBox = motion(Box)
	const formik = useFormik({
		initialValues: {
			email: '',
			name: '',
			company_name: '',
			product_type: '',
			emp_type: '',
			payment: '',
			desc: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email format').required('Required!'),
			name: Yup.string().required('Please input your name'),
			company_name: Yup.string().required('Required!'),
			product_type: Yup.string().required('Required!'),
			emp_type: Yup.string().required('Required!'),
			payment: Yup.string().required('Required!'),
			desc: Yup.string().required('Required!'),
		}),
		onSubmit: async (values) => {
			setIsLoading(true)

			await Axios.post(`/api/hire`, values)
				.then((res) => {
					toast({
						title: 'Message Sent!',
						description: 'Thanks for reaching out i will get back to you ASAP!',
						status: 'success',
						duration: 9000,
						isClosable: true,
					})
					setIsLoading(false)
				})
				.catch((err) => {
					toast({
						title: 'Error!',
						description: err.message,
						status: 'error',
						duration: 9000,
						isClosable: true,
					})
					setIsLoading(false)
				})
		},
	})
	const { isOpen, onOpen, onClose } = useDisclosure()

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
							<Flex h='80vh'>
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
										<Flex alignItems='center' mt='10'>
											<Button
												onClick={onOpen}
												mr='10'
												size='md'
												color='gray.800'
												colorScheme='gray'>
												Hire me
											</Button>

											<Modal isOpen={isOpen} onClose={onClose}>
												<ModalOverlay />
												<ModalContent>
													<ModalHeader>Hire Me!</ModalHeader>
													<ModalCloseButton />
													<form onSubmit={formik.handleSubmit}>
														<ModalBody>
															<SimpleGrid columns={2} spacing={4}>
																<FormControl
																	isInvalid={
																		formik.errors.name && formik.touched.name
																	}
																	mb='4'>
																	<FormLabel>Your name</FormLabel>
																	<Input
																		type='text'
																		id='name'
																		name='name'
																		variant='filled'
																		value={formik.values.subject}
																		onChange={formik.handleChange}
																	/>
																	<FormErrorMessage>
																		{formik.errors.name}
																	</FormErrorMessage>
																</FormControl>
																<FormControl
																	isInvalid={
																		formik.errors.email && formik.touched.email
																	}>
																	<FormLabel htmlFor='email'>
																		Email Address
																	</FormLabel>
																	<Input
																		id='email'
																		name='email'
																		type='email'
																		variant='filled'
																		onChange={formik.handleChange}
																		value={formik.values.email}
																	/>
																	<FormErrorMessage>
																		{formik.errors.email}
																	</FormErrorMessage>
																</FormControl>
																<FormControl
																	isInvalid={
																		formik.errors.company_name &&
																		formik.touched.company_name
																	}>
																	<FormLabel>Company name</FormLabel>
																	<Input
																		id='company_name'
																		name='company_name'
																		type='text'
																		variant='filled'
																		onChange={formik.handleChange}
																		value={formik.values.company_name}
																		placeholder='Business name'
																	/>
																	<FormErrorMessage>
																		{formik.errors.company_name}
																	</FormErrorMessage>
																</FormControl>
																<FormControl
																	isInvalid={
																		formik.errors.product_type &&
																		formik.touched.product_type
																	}>
																	<FormLabel>Product type</FormLabel>
																	<Select
																		variant='filled'
																		onChange={formik.handleChange}
																		value={formik.values.product_type}
																		name='product_type'
																		id='product_type'
																		placeholder='Select type'>
																		<option>UI/UX Design</option>
																		<option>Website Dev</option>
																		<option>Mobile App Dev</option>
																		<option>Consultaion</option>
																		<option>Devops</option>
																	</Select>
																	<FormErrorMessage>
																		{formik.errors.product_type}
																	</FormErrorMessage>
																</FormControl>
																<FormControl
																	isInvalid={
																		formik.errors.emp_type &&
																		formik.touched.emp_type
																	}>
																	<FormLabel>Employment</FormLabel>
																	<Select
																		variant='filled'
																		onChange={formik.handleChange}
																		value={formik.values.emp_type}
																		name='emp_type'
																		id='emp_type'
																		placeholder='Select hire'>
																		<option>Part-time</option>
																		<option>Full-time</option>
																		<option>Contract / Freelance </option>
																	</Select>
																	<FormErrorMessage>
																		{formik.errors.emp_type}
																	</FormErrorMessage>
																</FormControl>

																<FormControl
																	isInvalid={
																		formik.errors.payment &&
																		formik.touched.payment
																	}>
																	<FormLabel>Buget / Salary</FormLabel>
																	<NumberInput variant='filled'>
																		<NumberInputField
																			onChange={formik.handleChange}
																			value={formik.values.payment}
																			id='payment'
																			placeholder='Naira'
																		/>
																		<NumberInputStepper>
																			<NumberIncrementStepper />
																			<NumberDecrementStepper />
																		</NumberInputStepper>
																	</NumberInput>
																	<FormErrorMessage>
																		{formik.errors.payment}
																	</FormErrorMessage>
																</FormControl>
															</SimpleGrid>
															<FormControl
																isInvalid={
																	formik.errors.desc && formik.touched.desc
																}>
																<FormLabel>Description</FormLabel>

																<Textarea
																	variant='filled'
																	onChange={formik.handleChange}
																	value={formik.values.desc}
																	id='desc'
																	placeholder='Note ...'
																/>

																<FormErrorMessage>
																	{formik.errors.desc}
																</FormErrorMessage>
															</FormControl>
														</ModalBody>

														<ModalFooter>
															<Button
																isLoading={isLoading}
																type='submit'
																bg='gray.800'
																color='white'
																_active={{
																	bg: 'gray.700',
																}}
																_hover={{ bg: 'gray.700' }}>
																Submit
															</Button>
														</ModalFooter>
													</form>
												</ModalContent>
											</Modal>
											<Text
												as={Link}
												href='/Resume-Temidayo-Oladele.pdf'
												target='_blank'
												decoration='underline'>
												Download my CV
												<Icon boxSize='6' ml='2' as={HiOutlineDownload} />
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
			<Text textAlign='center' fontSize='xs' color='gray.200' bg='gray.800'>
				&copy;Oladele Temidayo Michael. 2022.
			</Text>
		</>
	)
}
