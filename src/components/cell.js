import React from 'react';
import { TETROMINOS } from '../tetrominos';
import { StyledCell } from './styles/styled-cell';

const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMINOS[type].color} />
)

export default Cell