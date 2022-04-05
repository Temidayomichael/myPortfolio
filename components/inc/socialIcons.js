import { IconButton } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { useRouter } from 'next/router'
import { AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiFacebook, FiTwitter } from 'react-icons/fi'

export default function SocialIcons() {
	const router = useRouter()

	return (
		<>
			<Flex pos={{ lg: 'fixed' }} className='socialicons'>
				<a href='https://github.com/Temidayomichael' target='_blank'>
					<IconButton
						className='IconButton'
						colorScheme='whiteAlpha'
						variant='outline'
						size='sm'
						aria-label='github'
						icon={<AiOutlineGithub />}
					/>
				</a>
				<a href='https://twitter.com/Temidayo_olad' target='_blank'>
					<IconButton
						className='IconButton'
						variant='outline'
						size='sm'
						colorScheme='twitter'
						aria-label='twitter'
						icon={<FiTwitter />}
					/>
				</a>
				<a href='https://www.instagram.com/michaell.dev/' target='_blank'>
					<IconButton
						variant='outline'
						colorScheme='red'
						size='sm'
						className='IconButton'
						aria-label='Instagram'
						icon={<AiOutlineInstagram />}
					/>
				</a>
				<a href='https://facebook.com/oladele.dayo.165' target='_blank'>
					<IconButton
						variant='outline'
						colorScheme='facebook'
						aria-label='Facebook'
						className='IconButton'
						icon={<FiFacebook />}
						size='sm'
					/>
				</a>
				<a href='https://linkedin.com/in/temidayo-oladele-8aba21116' target='_blank'>
					<IconButton
						variant='outline'
						colorScheme='linkedin'
						aria-label='Linkedin'
						className='IconButton'
						icon={<FaLinkedinIn />}
						size='sm'
					/>
				</a>
			</Flex>
		</>
	)
}
