import { Img } from '@chakra-ui/image'
import { Box, Container, Flex, Grid, Heading, Text, Wrap } from '@chakra-ui/layout'
import { Tag } from '@chakra-ui/tag'
import React from 'react'

export default function Portfolio() {
	return (
		<Container py="10" maxW='5xl'>
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
						fontSize={['3xl', '5xl']}>
						Selected Projects
					</Heading>
					<Text fontWeight='semibold'>
						Here you will find my recent projects
					</Text>
				</Box>
			</Box>
			<Box mt={['100px', '200px']}>
				<Box my='10' bg='#f2efbf' p={['5', '20']}>
					<Img src='../img/elab.png' />

					<Flex p='5' w='100%'>
						<Box>
							<Heading size='lg'>Elab Network</Heading>
							<Wrap mt='10'>
								<Tag size='lg' bg='gray.300'>
									Next js
								</Tag>
								<Tag size='lg' bg='gray.300'>
									React js
								</Tag>
								<Tag size='lg' bg='gray.300'>
									Node js
								</Tag>
								<Tag size='lg' bg='gray.300'>
									Chakra UI
								</Tag>
								<Tag size='lg' bg='gray.300'>
									Taiwind Css
								</Tag>
								<Tag size='lg' bg='gray.300'>
									React Hooks
								</Tag>
								<Tag size='lg' bg='gray.300'>
									Docker
								</Tag>
								<Tag size='lg' bg='gray.300'>
									Git
								</Tag>
							</Wrap>
						</Box>
					</Flex>
				</Box>
				<Box bg='#f2efbf' p={['5', '20']}>
					<Img src='../img/klasshour2.png' />

					<Flex p='5' w='100%'>
						<Box>
							<Heading size='lg'>Klasshour</Heading>
							<Wrap mt='10'>
								<Tag size='lg' bg='gray.300'>
									Next js
								</Tag>
								<Tag size='lg' bg='gray.300'>
									React js
								</Tag>
								<Tag size='lg' bg='gray.300'>
									Node js
								</Tag>
								<Tag size='lg' bg='gray.300'>
									Chakra UI
								</Tag>
								<Tag size='lg' bg='gray.300'>
									Taiwind Css
								</Tag>
								<Tag size='lg' bg='gray.300'>
									React Hooks
								</Tag>
								<Tag size='lg' bg='gray.300'>
									Docker
								</Tag>
								<Tag size='lg' bg='gray.300'>
									Git
								</Tag>
							</Wrap>
						</Box>
					</Flex>
				</Box>
			</Box>
		</Container>
	)
}
