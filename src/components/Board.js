import Title from "../Elements/Title";
import ScoreCard from "./ScoreCard";
import { OIcon } from "./OIcon";
import { XIcon } from "./XIcon.js";

interface SquareProp {
  value: JSX.Element | string | null,
  onClick(): void,
}


function Board({
  squares,
  onClick,
  Turn,
  AI,
  xScore,
  oScore,
  Winner,
  WinningSquares,
  ShowSquares,
  playAgain,
  clikExit,
}) {
  
  function Square({ value, onClick }: SquareProp) {
    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
  }
  
  function value(i:number){
    let value;
    if( squares[i] ==="X"){
      value=<XIcon />
    }else if( squares[i] === "O"){
       value=<OIcon />
    }else{
       value=null;
    }
    return value;
  }

  const renderSquare = (i: number) => {

    // Square Button and RenderSquare function
    return <Square value={value(i)} onClick={() => {
      onClick(i);
    }}/>
  };

  
  

  return (
    <>
      <Title>
        {Winner === "d" ? "Draw" : Winner !== null && "Winner: " + Winner}
      </Title>
      {Winner === null && (
        <ScoreCard Turn={Turn} xScore={xScore} oScore={oScore} />
      )}
      {ShowSquares && (
        <div className="items-center justify-center">
          <div className="board">
              <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
              </div>

              <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
              </div>

              <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
              </div>
          </div>
        </div>
      )}
      {!ShowSquares && (
        <div>
          <button className="my-2 w-[120px] button px-2 py-1 hover:ring-4 hover:ring-cyan-300 rounded-md bg-[#f3b236] hover:bg-[#30c4bd]" onClick={playAgain}>Play Again</button>
          <button className="my-2 w-[120px] button px-2 py-1 hover:ring-4 hover:ring-cyan-300 rounded-md bg-[#f3b236] hover:bg-[#30c4bd]" onClick={clikExit}>Exit</button>
        </div>
      )}
    </>
  );
}

export default Board;
