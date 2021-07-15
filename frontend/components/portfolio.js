import { Img } from '@chakra-ui/image'
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout'
import React from 'react'

export default function Portfolio() {
	return (
		<>
			<Box pt='20' textAlign='center'>
				<Flex justifyContent='center' pt='10'>
					<Text
						color='#D13F31'
						fontWeight='extrabold'
						textTransform='uppercase'
						fontSize='xl'>
						Works
					</Text>
				</Flex>
				<Box>
					<Heading
						my='5'
						as='h1'
						fontFamily='times-roman'
						fontWeight='bold'
						letterSpacing='5'
						fontSize='5xl'>
						Selected Projects
					</Heading>
					<Text fontWeight='semibold'>
						Here you will find my recent projects
					</Text>
				</Box>
			</Box>
			<Grid mt='20' templateColumns='repeat(2, 1fr)'>
				<Box p='5' w='100%' bg='blue.500'>
					<Img src='../img/elab.png' />
				</Box>
				<Box p='5' w='100%' bg='blue.200'>
					<Img src='../img/elab2.png' />
				</Box>
				<Box p='5' w='100%' bg='red.400'>
					<Img src='../img/klasshour.png' />
				</Box>
				<Box p='5' w='100%' bg='blue.900'>
					<Img src='../img/klasshour2.png' />
				</Box>
				<Box w='100%' bg='gray.400' />
				<Box w='100%' bg='blue.700' />
			</Grid>
		</>
	)
}
