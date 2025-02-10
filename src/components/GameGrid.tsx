import React, { useEffect, useState } from 'react'
import ApiClient from '../services/ApiClient';
import  { getGames } from '../services/GamesService';
import { Game } from '../models/Game';
import useGame from '../hooks/useGame';

function GameGrid() {
   const  {games,error,setGame,setError}= useGame();
  return (
        <ul>
            {games.map((game)=><li>{game.title}</li>)}
        </ul>
  )
}

export default GameGrid