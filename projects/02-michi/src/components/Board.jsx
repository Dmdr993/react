import { Square } from "./Square"
import { TURNS } from "../constants"
import { WinnerModal} from "./WinnerModal"

export function Board({ resetGame, board,turn,winner,updateBoard}) {
    return (
        <main className='board'>
            <h1>Michi</h1>
            <button onClick={resetGame}>Reset</button>
            <section className="game">
                {
                    board.map((square, index) => {
                        return (
                            <Square
                                key={index}
                                index={index}
                                updateBoard={updateBoard}
                            >
                                {square}
                            </Square>
                        )
                    })
                }
            </section>
            <section className="turn">
                <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>
            <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
        </main>
    )
}