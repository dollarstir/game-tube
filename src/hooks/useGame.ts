
import { useEffect, useState } from "react";
import { Game } from "../models/Game";
import { getGames } from "../services/GamesService";

 import React from 'react'
import { CanceledError } from "axios";
 
 function useGame() {
    const [games, setGame] = useState<Game[]>([]);
    const [error,setError]= useState("");

    useEffect(()=>{
        const controller  = new AbortController();
        getGames()
        .then((response) => {
            setGame(response.data)
            console.log(response.data)
            setError("");
        })
        .catch((err)=>{
            if(err instanceof CanceledError )return 
            else{
                setError(err.message)
            console.log(err.message)
            }
        })
        return ()=> controller.abort();
    },[])
   return {games,error,setGame,setError};
 }
 
 export default useGame