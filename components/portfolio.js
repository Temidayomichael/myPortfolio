import { Img } from '@chakra-ui/image'
import {
	Box,
	Container,
	Flex,
	Stack,
	Heading,
	Text,
	SimpleGrid,
	Wrap,
	Link,
} from '@chakra-ui/layout'
import { Tag, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import FigmaEmbed from 'react-figma-embed'

export default function Portfolio() {
	function MyProject({ company_name, link, skills, role, image }) {
		return (
			<>
				<Box bg='#f2efbf' p={['5', '10']}>
					<Stack spacing='6'>
						<Img src={`../img/${image}`} alt='Project image' />

						<Heading d='flex' alignItems='center' size='lg'>
							<Link
								mr='2'
								target='_blank'
								color={link ? 'blue' : 'gray'}
								href={link}>
								<AiOutlineLink />
							</Link>{' '}
							{company_name}
						</Heading>
						<Tag py='2' size='lg' bg='#DEDBA7'>
							{role}
						</Tag>
						<Wrap mt='10'>
							{skills &&
								skills.map((skill, key) => {
									return (
										<Tag key={key} size='lg' bg='gray.300'>
											{skill}
										</Tag>
									)
								})}
						</Wrap>
					</Stack>
				</Box>
			</>
		)
	}

	return (
		<Container py='10' maxW='5xl'>
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
			<Box mt={['100px', 'lg']}>
				<Tabs>
					<TabList>
						<Tab>Latest</Tab>
						<Tab>UI / UX</Tab>
						<Tab>Others</Tab>
					</TabList>
					<TabPanels>
						{/* initially mounted */}
						<TabPanel mt='10'>
							<SimpleGrid columns={{ base: '1', lg: '2' }} spacing={10}>
								<MyProject
									company_name='Pykup Logistics'
									link='https://pykup.app'
									role='Founder, Team Lead'
									skills={['Nextjs', 'AWS', 'Expressjs', 'Nodejs', 'MongoDb']}
									image='pykup.png'
								/>
								<MyProject
									role='Software Developer - Affiliate Website and Driver app backend'
									skills={[
										'Nextjs',
										'React',
										'AWS',
										'Expressjs',
										'Nodejs',
										'MongoDb',
									]}
									image='foodgital_earn.png'
									link='https://foodgital.com'
									company_name='Foodgital'
								/>
								<MyProject
									role='FullStack developer'
									link='https://klasshour.com'
									skills={['Nextjs', 'MongoDb']}
									image='klasshour.png'
									company_name='Klasshour'
								/>
								{/* <Project company_name='Elab Network' /> */}
							</SimpleGrid>
						</TabPanel>
						{/* initially not mounted */}
						<TabPanel>
							<SimpleGrid columns={{ base: '1', lg: '2' }} spacing={10}>
								<FigmaEmbed url='https://www.figma.com/file/eAbZ5cEyx9q0RV7iOLuo7K/Pykup-website?node-id=0%3A1' />
							</SimpleGrid>
						</TabPanel>
						<TabPanel>
							<SimpleGrid columns={{ base: '1', lg: '2' }} spacing={10}>
								<MyProject
									company_name='Frontend Challenge'
									link='https://temidayomichael.github.io/frontend_challenge'
									skills={['Reactjs']}
									role='React developer'
									image='frontend_challenge.png'
								/>
								<MyProject
									role='FullStack developer'
									skills={['Nextjs', 'MongoDb']}
									image='elab.png'
									company_name='Elab Network'
								/>
							</SimpleGrid>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Container>
	)
}
