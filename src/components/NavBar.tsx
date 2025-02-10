import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/webpack.svg'

function NavBar() {
  return (
    <HStack>
        <Image  src={logo} boxSize='60px'/>
        <Text>Dollarsoft</Text>
    </HStack>
  )
}

export default NavBar