import { useEffect, useState } from 'react'
import { Game } from '../models/Game';
import useGame from '../hooks/useGame';
import GameCard from './GameCard';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameSkeleton from './GameSkeleton';

interface Props{
    selectedgenre:string;
}
function GameGrid({selectedgenre}:Props) {
   const  {games,error,setGame,setError,isLoading}= useGame();
   const skeleton = [1,2,3,4,5,6,7,8];
   const [filteredGames,setFilteredGames] = useState<Game[]>([]);

   useEffect(()=>{
    // setFilteredGames(games);
    if(selectedgenre !==''){

        setFilteredGames(games.filter((games)=>games.genre === selectedgenre));
    }
    else{
        setFilteredGames(games);
    }

   },[selectedgenre,games,isLoading])

  return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm:1,md:2,lg:4}} gap={5} padding='10px'> 
            {isLoading && skeleton.map(s=><GameSkeleton key={s} />)}
            {filteredGames.map(game=>(
                <GameCard key={game.id} game={game} />

            ))}
        </SimpleGrid >
    </>
  )
}

export default GameGrid