import {useState} from 'react';
/*function Reset({click}){
    return <button className = "reset" onClick={click} > Reset</button>
}
function Square({value, onSquareClick}){

    return <button className ="square" onClick = {onSquareClick} >{value}</button>
}
export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
      function handleClick(i){
        if(squares[i]){
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[i] = "X";
        }else{
            nextSquares[i] = "O"
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }
    function rset(){
        setSquares(Array(9).fill(null));
       
    }
  return (
    <>
    <div className = "board-row">
        <Square value = {squares[0]} onSquareClick ={() => handleClick(0)}/>
        <Square value = {squares[1]} onSquareClick ={() => handleClick(1)}/>
         <Square value = {squares[2]} onSquareClick ={() => handleClick(2)}/>
    </div>
    <div className = "board-row">
        <Square value = {squares[3]} onSquareClick = {() => handleClick(3)} />
        <Square value = {squares[4]} onSquareClick = {() => handleClick(4)}/>
        <Square value = {squares[5]} onSquareClick = {() => handleClick(5)}/>
    </div>
    <div className = "board-row">
        <Square value = {squares[6]} onSquareClick = {() => handleClick(6)} />
        <Square value = {squares[7]} onSquareClick = {() => handleClick(7)}/>
        <Square value = {squares[8]} onSquareClick = {() => handleClick(8)}/>
    </div>

    <Reset click ={rset} />
    </>
  );
}
  
  /*function CounterDisplay({count}){
        return <h1> Count: {count}</h1>
    }
    function IncrementButton({onClick}){
        return <button onClick={onClick}>+1</button>
    }
    function DecrementButton({onClick}){
        return <button onClick={onClick}>-1</button>
    }
export default function counter(){
   const [count, setCount] = useState(0);
   function handleIncrement(){
    setCount(count + 1);
   }
   function handleDecrement(){
    setCount(count-1);
   }
   function handleReset(){
    setCount(0)
   }
   return(
    <div style={{textAlign:'center', marginTop: '50px'}}>
        <CounterDisplay count ={count} />
        <IncrementButton onClick = {handleIncrement} />
        <DecrementButton onClick={handleDecrement} />
    </div>
   );
}
   
*/
function Laughingemoji({count,onClick}){   
return <h1 onClick = {onClick}>😀:{count}</h1>
}

function Coolemoji({count,onClick}){   
return <h1 onClick = {onClick}>😎:{count}</h1>
}
function Reset({onClick}){
return <button onClick = {onClick}> Reset</button>
}

export default function Emojiboard(){
const [votes, setvotes] = useState(0);
function handleVotes(){
    setvotes(votes+1);
}
function resetVotes(){
setvotes(0);
console.log('hi')
}
return(
<>
<Laughingemoji count = {votes} onClick = {handleVotes}/>


<Coolemoji count = {votes} onClick = {handleVotes}/>
<Reset onClick = {resetVotes}/>
</>


);
}

