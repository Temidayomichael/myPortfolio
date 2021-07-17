import { IconButton } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiFacebook, FiTwitter } from 'react-icons/fi'

export default function SocialIcons() {
	return (
		<>
            <Flex pos={{ lg: 'fixed' }} className='socialicons'>
				<IconButton
					className='IconButton'
					colorScheme='whiteAlpha'
					variant='outline'
					size='sm'
					aria-label='github'
					icon={<AiOutlineGithub />}
				/>
				<IconButton
					className='IconButton'
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
					className='IconButton'
					aria-label='Instagram'
					icon={<AiOutlineInstagram />}
				/>
				<IconButton
					variant='outline'
					colorScheme='facebook'
					aria-label='Facebook'
					className='IconButton'
					icon={<FiFacebook />}
					size='sm'
				/>
				<IconButton
					variant='outline'
					colorScheme='linkedin'
					aria-label='Linkedin'
					className='IconButton'
					icon={<FaLinkedinIn />}
					size='sm'
				/>
			</Flex>
		</>
	)
}
