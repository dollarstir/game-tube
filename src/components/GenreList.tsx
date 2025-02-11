import React from "react";
import useGnre from "../hooks/useGenre";
import logo from "../assets/logo.png";
import { HStack, Image, Text } from "@chakra-ui/react";
import GenreLogo from "./GenreLogo";

export default function GenreList() {
  const { genre, setGenre, isLoading, error, setError } = useGnre();
  

  return (
    <ul style={{ textDecoration: "none" }}>
      {genre.map((genre, index) => (
        <li key={index} style={{ paddingTop: "5px", paddingBottom: "5px" }}>
          <HStack>
            <GenreLogo genre={genre}  />
            <Text fontSize={'lg'}>{genre}</Text>
          </HStack>
        </li>
      ))}
    </ul>
  );
}
