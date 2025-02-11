import React from 'react'
import { FaWindows } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { Icon } from '@chakra-ui/react';

interface Props{
    platform:string;
}
function Platforms({platform}:Props) {
    const platformIcons = {"PC (Windows)":<FaWindows />,
        "Web Browser":<BsBrowserChrome />};
    const icon  = platformIcons[platform as keyof typeof platformIcons];

    return (
        <Icon color='gray.500'>
            {icon || <span>Unknown platform</span>}
        </Icon>
    );
}

export default Platforms