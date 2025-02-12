import React from "react";
import useGnre from "../hooks/useGenre";
import logo from "../assets/logo.png";
import { Button, HStack, Image, Spinner, Text } from "@chakra-ui/react";
import GenreLogo from "./GenreLogo";


interface Props{
    onSelectedGenre: (selectedGenre:string)=>void;
}
export default function GenreList({onSelectedGenre}:Props) {
  const { genre, setGenre, isLoading, error, setError } = useGnre();
  
  

  return (
    <>
    {isLoading && <Spinner/>}
    <ul style={{ textDecoration: "none" }}>
      {genre.map((genre, index) => (
        <li key={index} style={{ paddingTop: "5px", paddingBottom: "5px" }}>
          <HStack>
            <GenreLogo genre={genre}  />
            <Button onClick={()=>onSelectedGenre(genre)} fontSize={'lg'} variant='ghost'>{genre}</Button>
          </HStack>
        </li>
      ))}
    </ul>
    </> 
  );
}
