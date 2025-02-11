import React, { useEffect, useState } from 'react'
import ApiClient from '../services/ApiClient';
import  { getGames } from '../services/GamesService';
import { Game } from '../models/Game';
import useGame from '../hooks/useGame';
import GameCard from './GameCard';
import { SimpleGrid, Text } from '@chakra-ui/react';

function GameGrid() {
   const  {games,error,setGame,setError}= useGame();
  return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm:1,md:2,lg:4}} gap={5} padding={'10px'}> 
            {games.map(game=>(
                <GameCard key={game.id} game={game} />

            ))}
        </SimpleGrid >
    </>
  )
}

export default GameGrid