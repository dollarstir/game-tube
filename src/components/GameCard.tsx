import React from 'react'
import { Game } from '../models/Game'
import { Card, Heading, Image } from '@chakra-ui/react'


interface Props{
game : Game
}
function GameCard({game}:Props) {
  return (
       
            <Card.Root borderRadius={10} overflow={'hidden'}>
                <Image src={game.thumbnail} />
                <Card.Body>
                    <Heading fontSize={'2xl'}>{game.title}</Heading>
                </Card.Body>
            </Card.Root>
    
  )
}

export default GameCard