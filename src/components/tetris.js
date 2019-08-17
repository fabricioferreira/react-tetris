import React from 'react';
import Display from './display';
import Stage from './stage';

const Tetris = () => {
    return (
        <div>
            <Stage />
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                </div>
            </aside>
        </div>
    )
}

export default Tetris