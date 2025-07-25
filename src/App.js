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
  */
 /*
 function DisplayCounter({count}){
    return <h1>Count:{count} </h1>
 }
 function Increment({onClick}){
    return <button onClick = {onClick}>+1</button>
 }
 function Decrement({onClick}){
    return <button onClick = {onClick}> -1</button>
 }
 function Reset({onClick}){
    return <button onClick={onClick}> Reset</button>
 }


 export default function counter(){
const [value, setvalue] = useState(0);
if(value<=0){
    <p style ={{color:"red"}}> Can't go lower than 0!</p>
}
function handleIncrement(){
    setvalue(value+1)
}
function handleDecrement(){
   if(value>0){
     setvalue(value-1);
}
}
function handleReset(){
    setvalue(0)
}

    return(
        <>
        <DisplayCounter count = {value} />
        <Increment  onClick={ handleIncrement}/>
        <Decrement onClick={handleDecrement} />
        <Reset onClick={handleReset} />
        </>
    );
 }
    */
/*
 function EmojiDisplay({emoji, vote}){
    return<h3>{emoji}:{vote}</h3>
 }
 function Increment({onClick}){
    return <button onClick={onClick}> +1</button>
 }
 export default function Emjoi(){
   const [emojiList, setEmojilist] = useState([
    {emoji: '😂', votes:0},
    {emoji:'🤖', votes:0},
    {emoji: '😎', votes:0},
   ]);
   function handleIncrement(index){
        const copy = emojiList.slice();
       copy[index].votes+=1;
       setEmojilist(copy);
   }

   return(
    <div>
    <h2> Emoji Voter Board</h2>
    {emojiList.map((emojiLists, index) => (
        <>
        <EmojiDisplay
             key={index}
          emoji={emojiLists.emoji}
          vote={emojiLists.votes}
        />
        <Increment onClick={() => handleIncrement(index)}/>
        </>
    ))}
    </div>
   );
 }
   */

/* function Display(){
    return <h1> Vote for Your Favorite Pizza Topping!</h1>
 }
 function DisplayVotes({name, votes}){
    return <p> {name}: {votes}</p>
 }
 function Increment({onClick}){
    return <button onClick = {onClick}>+1</button>
 }
 function ResetAll({onClick}){
return <button onClick={onClick}> Reset All </button>
 }
export default function ToppingBoard(){
    const [toppingList, setTopping] = useState([
        {name:"Peperoni", votes:0},
        {name:"Green Peppers", votes:0},
        {name:"Pineapple", votes:0}
    ])
function handleVote(index){
    const newArray = toppingList.slice();
    newArray[index].votes+=1;
    setTopping(newArray);
}
function reset(){
        const newArray = toppingList.map((topping) =>{
            return{
                name: topping.name,
                votes:0
            }
        })
        setTopping(newArray);    
    }
    

    return(
        <div>
            <Display/>
        {toppingList.map(( topping,index) => (
        <>
        <DisplayVotes
        key = {index}
        name = {topping.name}
        votes = {topping.votes}
        />

        <Increment onClick={() => handleVote(index)} />
        </>
    ))}
    <ResetAll onClick={() => reset()}/>
       
      </div> 
    );
}
*/
function Child({onNameChange}){
    return <input type = "text" onChange={(event) => onNameChange(event.target.value)}></input>
}
export default  function parent(){
    const [name, setName] = useState("");

    function handleNameChange(newName){
        setName(newName);
    }
    return(
        <>
        <Child onNameChange={handleNameChange}/>
        <p> Your name is: {name}</p>
        </>
        
    )
}