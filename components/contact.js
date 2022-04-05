import {
	Box,
	Button,
	Center,
	Container,
	Divider,
	Flex,
	Heading,
	Icon,
	Input,
	useToast,
	Stack,
	Text,
	Textarea,
	FormControl,
	FormLabel,
	FormErrorMessage,
	VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiGenderlessFill } from 'react-icons/ri'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Axios from 'axios'

export default function Contact() {
	const [isLoading, setIsLoading] = useState(false)
	const toast = useToast()

	const formik = useFormik({
		initialValues: {
			email: '',
			name: '',
			subject: '',
			message: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email format').required('Required!'),
			name: Yup.string().required('Required!'),
			subject: Yup.string().required('Required!'),
			message: Yup.string().required('Required!'),
		}),
		onSubmit: async (values) => {
			setIsLoading(true)
			await Axios.post(`/api/contact`, values)
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

	return (
		<>
			<Box pt='20' textAlign='center'>
				<Flex justifyContent='center' pt='10'>
					<Text
						color='#D13F31'
						fontWeight='extrabold'
						textTransform='uppercase'
						fontSize={['lg', 'xl']}>
						Contact
					</Text>
				</Flex>
				<Box color='gray.50'>
					<Heading
						my='5'
						as='h1'
						fontFamily='times-roman'
						fontWeight='bold'
						letterSpacing='5'
						fontSize={['3xl', '5xl']}>
						Get In Touch
					</Heading>
					<Text color='gray.400'>
						Please submit the form bellow so i can react out to you in response
						as soon as possible.
					</Text>
				</Box>
			</Box>
			<Container
				flexDirection='row-reverse'
				justifyContent='space-between'
				d={['box', 'flex']}
				maxW='5xl'
				mt='10'>
				<Stack
					color='gray.50'
					spacing={8}
					mt='10'
					ml={['0', '20']}
					w={['100%', '30%']}>
					<Text fontWeight='semibold'>
						Phone Number
						<Text color='blue.400' mt='3'>
							<a href='tel:+2348102334561'>+234 810 233 4561</a>
						</Text>
					</Text>
					<Text fontWeight='semibold'>
						Email
						<Text mt='3' color='blue.400'>
							<a href='mailto:dayoo.oladele@gmail.com'>
								Dayoo.oladele@gmail.com
							</a>
						</Text>
					</Text>
					<Text fontWeight='semibold'>
						Address{' '}
						<Text mt='3' color='gray.400'>
							Nigeria.
						</Text>
					</Text>
				</Stack>
				<form
					style={{
						width: '100%',
					}}
					onSubmit={formik.handleSubmit}>
					<VStack py='10' color='gray.50' spacing={8}>
						<FormControl isInvalid={formik.errors.name && formik.touched.name}>
							<FormLabel>Your name</FormLabel>
							<Input
								type='text'
								id='name'
								name='name'
								_focus={{
									borderColor: '#D13F31',
								}}
								variant='flushed'
								value={formik.values.name}
								onChange={formik.handleChange}
							/>
							<FormErrorMessage>{formik.errors.name}</FormErrorMessage>
						</FormControl>
						<FormControl
							isInvalid={formik.errors.email && formik.touched.email}>
							<FormLabel htmlFor='email'>Email Address</FormLabel>
							<Input
								id='email'
								name='email'
								type='email'
								_focus={{
									borderColor: '#D13F31',
								}}
								variant='flushed'
								onChange={formik.handleChange}
								value={formik.values.email}
							/>
							<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
						</FormControl>
						<FormControl
							isInvalid={formik.errors.subject && formik.touched.subject}>
							<FormLabel htmlFor='subject'>Subject</FormLabel>
							<Input
								id='subject'
								name='subject'
								type='text'
								_focus={{
									borderColor: '#D13F31',
								}}
								variant='flushed'
								onChange={formik.handleChange}
								value={formik.values.subject}
							/>
							<FormErrorMessage>{formik.errors.subject}</FormErrorMessage>
						</FormControl>
						<FormControl
							isInvalid={formik.errors.message && formik.touched.message}>
							<FormLabel htmlFor='message'>Message</FormLabel>
							<Textarea
								id='message'
								name='message'
								type='text'
								_focus={{
									borderColor: '#D13F31',
								}}
								variant='flushed'
								onChange={formik.handleChange}
								value={formik.values.message}
							/>
							<FormErrorMessage>{formik.errors.message}</FormErrorMessage>
						</FormControl>

						<Button
							isLoading={isLoading}
							type='submit'
							_focus={{
								borderColor: 'black',
							}}
							colorScheme='blackAlpha'>
							Submit
						</Button>
					</VStack>
				</form>
			</Container>
		</>
	)
}
