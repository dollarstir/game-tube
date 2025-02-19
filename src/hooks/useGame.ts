
import { useEffect, useState } from "react";
import { Game } from "../models/Game";
import { getGames } from "../services/GamesService";

import React from 'react'
import { CanceledError } from "axios";

function useGame() {
    const [games, setGame] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        getGames()
            .then((response) => {
                setGame(response.data)
                console.log(response.data)
                setError("");
                setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                else {
                    setError(err.message)
                    console.log(err.message)
                    setIsLoading(false);
                }
            })
        return () => controller.abort();
    }, [])
    return { games, error, setGame, setError,isLoading };
}

export default useGame