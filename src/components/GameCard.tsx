import React from 'react'
import { Game } from '../models/Game'
import { Box, Card, Heading, HStack, Icon, Image } from '@chakra-ui/react'
import Platforms from './Platforms'
import Score from './Score'









interface Props{
game : Game
}
function GameCard({game}:Props) {
  return (
       
            <Card.Root borderRadius={10} overflow={'hidden'}>
                <Image src={game.thumbnail} />
                <Card.Body>
                    <Heading fontSize={'2xl'}>{game.title}</Heading>
                    <HStack justifyContent={'space-between'}>
                    <Box padding={'10px'}><Platforms  platform={game.platform} /></Box>
                    <Score/>
                    </HStack>
                    



                </Card.Body>
            </Card.Root>
    
  )
}

export default GameCard