import React, {useEffect, useState} from 'react';
import SquareComponent from "./modules/SquareComponent";
import Popup from "./modules/Popup"

const clearState = ["", "", "", "", "", "", "", "", "", ""];

function App() {
    const [gameState, updateGameState] = useState(clearState)
    const [isXChance, updateIsXChance] = useState(false)
    const [popup, setPopup] = useState(false)
    const [Msg, setMsg] = useState("")

    const onUserClicked = (index) => {
        let strings = Array.from(gameState);
        if (strings[index])
            return ;
        strings[index] = isXChance ? "X" : "0";
        
        updateIsXChance(!isXChance)
        updateGameState(strings)
    }

    const clearGame = () => {
        updateGameState(clearState)
    }
    useEffect(() => {
        let winner = checkWinner();
        if (winner) {
            clearGame();
            setMsg(`Congratulations ${winner} you won the Game !`)
            setPopup(true)
        }
    }, [gameState])

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b]&& gameState[a] === gameState[c]) {
                return gameState[a];
            }
                          
        }
        let check= gameState.filter(index=>{
          return index!==""
        })
        if(check.length===9){
          clearGame();
          setMsg("Oops Match is Draw")
          setPopup(true)
        }
        return null;
    }

    return (
        <div className="app-header">
            <p className="heading-text">React Tic Tac Toe - 2022</p>
            <div className="row jc-center">
                <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(0)} state={gameState[0]}/>
                <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(1)} state={gameState[1]}/>
                <SquareComponent className="b-bottom" onClick={() => onUserClicked(2)} state={gameState[2]}/>
            </div>
            <div className="row jc-center">
                <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(3)} state={gameState[3]}/>
                <SquareComponent className="b-bottom-right" onClick={() => onUserClicked(4)} state={gameState[4]}/>
                <SquareComponent className="b-bottom" onClick={() => onUserClicked(5)} state={gameState[5]}/>
            </div>
            <div className="row jc-center">
                <SquareComponent className="b-right" onClick={() => onUserClicked(6)} state={gameState[6]}/>
                <SquareComponent className="b-right" onClick={() => onUserClicked(7)} state={gameState[7]}/>
                <SquareComponent onClick={() => onUserClicked(8)} state={gameState[8]}/>
            </div>
            <button className="clear-button" onClick={clearGame}>Clear Game</button>
            <Popup trigered={popup} trigger={setPopup}>
              <h3>{Msg}</h3>
            </Popup>
            <p className="fc-aqua fw-600">Jotiba Harane</p>
        </div>
    );
}

export default App;