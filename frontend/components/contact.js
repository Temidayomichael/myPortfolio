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
	SimpleGrid,
	Stack,
	Text,
	Textarea,
} from '@chakra-ui/react'
import React from 'react'
import { RiGenderlessFill } from 'react-icons/ri'

export default function Contact() {
	return (
		<>
			<Box pt='20' textAlign='center'>
				<Flex justifyContent='center' pt='10'>
					<Text
						color='#D13F31'
						fontWeight='extrabold'
						textTransform='uppercase'
						fontSize='xl'>
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
						fontSize='5xl'>
						Get In Touch
					</Heading>
					<Text color='gray.400'>
						Please submit the form bellow so i can react out to you in response
						as soon as possible.
					</Text>
				</Box>
			</Box>
			<Container justifyContent='space-between' d='flex' maxW='5xl' mt='10'>
				<Stack color='gray.50' w='70%' spacing={8}>
					<Input
						_focus={{
							borderColor: '#D13F31',
						}}
						variant='flushed'
						placeholder='Name'
					/>
					<Input
						_focus={{
							borderColor: '#D13F31',
						}}
						variant='flushed'
						placeholder='Email'
					/>
					<Input
						_focus={{
							borderColor: '#D13F31',
						}}
						variant='flushed'
						placeholder='Subject'
					/>
					<Textarea
						_focus={{
							borderColor: '#D13F31',
						}}
						variant='flushed'
						placeholder='Message'
					/>
					<Button
						_focus={{
							borderColor: 'black',
						}}
						colorScheme='blackAlpha'>
						Submit
					</Button>
				</Stack>
				<Stack color='gray.50' spacing={8} mt='10' ml='20' w='30%'>
					<Text fontWeight='semibold'>
						Phone Number{' '}
						<Text mt='3' color='gray.400'>
							Mobile: +234 810 233 4561
						</Text>
					</Text>
					<Text fontWeight='semibold'>
						Email{' '}
						<Text mt='3' color='gray.400'>
							Dayoo.oladele@gmail.com
						</Text>
					</Text>
					<Text fontWeight='semibold'>
						Address{' '}
						<Text mt='3' color='gray.400'>
							Nigeria
						</Text>
					</Text>
				</Stack>
			</Container>
		</>
	)
}
