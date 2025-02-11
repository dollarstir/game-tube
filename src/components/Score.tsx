import { Badge } from '@chakra-ui/react';
import React from 'react'

function Score() {
    const scores = Math.floor(Math.random()* 100);
    let color  = scores >75 ? 'green': scores>60 ?'yellow':'red'
  
  return (
    <Badge colorPalette={color} fontSize={'14px'} paddingX={2} borderRadius={'2px'}>{scores}</Badge>
  )
}

export default Score