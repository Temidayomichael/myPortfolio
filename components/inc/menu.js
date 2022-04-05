import { Center, Container, Stack,Link,Text } from '@chakra-ui/layout'
import React from 'react'
import Scrollspy from 'react-scrollspy'
import Sticky from 'react-sticky-el'

export default function Menu() {
    return (
			<>
				<Sticky
					stickyStyle={{
						backgroundColor: '#1a202c',
						zIndex: '20',
					}}>
					<Container
						maxWidth='8xl'
						as={Stack}
						d='flex'
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
						<Center
							textTransform='uppercase'
							d={['none', 'block']}
							as={Text}
							color='gray.200'>
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
					</Container>
				</Sticky>
			</>
		)
}
