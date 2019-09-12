import React from 'react';
import { createStage } from '../game-helpers';
import Display from './display';
import Stage from './stage';
import StartButton from './start-button';
import { StyledTetris, StyledTetrisWrapper } from './styles/styled-tetris';

const Tetris = () => {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()} />
                <aside>
                    <div>
                        <Display text="Score" />
                        <Display text="Rows" />
                        <Display text="Level" />
                    </div>
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris