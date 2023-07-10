export const saveGameToStorage =({board,turn})=>{
    //Guardar el nuevo tablero
    //Guardar el nuevo turno 
    window.localStorage.setItem('board',JSON.stringify(board));
    window.localStorage.setItem('turn',turn)
}
export const resetGameStorage =()=>{
    //Removemos los items del local storage al resetear el juego
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn')
}