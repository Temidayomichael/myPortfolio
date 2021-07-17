import React from 'react'
import {
	Box,
	Divider,
	Flex,
	Link,
	Stack,
	Text,
	Image,
	Center,
	useColorMode,
	IconButton,
	Heading,
	Icon,
	Container,
	Tag,
	SimpleGrid,
	Wrap,
} from '@chakra-ui/react'

export default function About() {
	return (
		<>
			<Box pt='20' textAlign='center'>
				<Flex justifyContent='center' pt='10'>
					<Text
						color='#D13F31'
						fontWeight='extrabold'
						textTransform='uppercase'
						fontSize='xl'>
						About
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
						Personal Info
					</Heading>
					<Text color='gray.400' fontWeight='semibold'>
						Get to know more about me
					</Text>
				</Box>
			</Box>
			<Container
				mt='200px'
				justifyContent='space-between'
				maxW='5xl'
				as={Center}>
				<SimpleGrid columns={2} spacing={10}>
					<Box>
						<Text fontWeight='semibold'>Hello!</Text>
						<Text mt='10'>
							My name is Oladele Temidayo Michael and I'm a passion driven
							developer using my programming skills to build beautiful and
							amazing solutions to solve problems for diffrents businesses in
							different industries.
						</Text>
						<Text mt='3'>
							So please feel free to{' '}
							<Link href='#contact' color='blue'>
								contact me
							</Link>{' '}
							either it's a great idea you want to bring to life, a job offer,
							or just chat.
						</Text>
					</Box>
					<Box ml='10'>
						<Text fontWeight='semibold'>Skills</Text>
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
				</SimpleGrid>
			</Container>
		</>
	)
}
