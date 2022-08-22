import React from 'react'
import styled from 'styled-components'
import { OIcon } from "./OIcon";
import { XIcon } from "./XIcon.js";

const Score = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&family=Luckiest+Guy&display=swap');
    color: ${props => props.turn === props.check ? "#b6c981": "whitesmoke"};
    font-size: 50px;
    font-family: 'Coda Caption', sans-serif;
    font-family: 'Luckiest Guy', cursive;
    margin-top: 5px;
`
function ScoreCard({Turn,xScore,oScore}) {
    return (
        <div className='flex items-center justify-center mx-auto'>
            <button className='px-2 py-1'><XIcon /></button>
            {Turn === 'X' && <Score>&#8594;</Score>}
            <Score turn={Turn} check='X'>{xScore}</Score>
            <button className='px-2 py-1'><OIcon /></button>
            {Turn === 'O' && <Score>&#8594;</Score>}
            <Score turn={Turn} check='O'>{oScore}</Score>
        </div>
    )
}

export default ScoreCard