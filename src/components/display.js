import React from 'react'
import { StyledDisplay } from './styles/styled-display'

const Display = ({ gameOver, text }) => (
    <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
)

export default Display