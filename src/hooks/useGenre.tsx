
import { useEffect, useState } from "react";
import { getGames } from "../services/GamesService";
import { CanceledError } from "axios";

function useGnre() {
    const [genre, setGenre] = useState<string[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        getGames()
            .then(({data}) => {
                const uniqueGenres = Array.from(new Set(data.map(game => game.genre)));
                setGenre(uniqueGenres); 
                setIsLoading(false);
                setError('');
                
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
    return { genre, error, setGenre, setError,isLoading };
}

export default useGnre