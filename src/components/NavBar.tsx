"use client";
import {
  ClientOnly,
  HStack,
  IconButton,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import React from "react";

import logo from "../assets/webpack.svg";
import { useColorMode } from "./ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";


function NavBar() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton
          onClick={toggleColorMode}
          variant="outline"
          size="sm"
        >
           {colorMode ==="light" ?<LuSun/> : <LuMoon/>}
        </IconButton> 
      </ClientOnly>
    </HStack>
  );
}

export default NavBar;
