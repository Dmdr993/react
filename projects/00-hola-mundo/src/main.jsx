import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
// import { TwitterFollowCard } from './TwitterFollowCard'
import './index.css'
import './App.css'

// //Manera incorrecta
// //Funciona pero sigue siendo imperativo
// //es una función que retorna el boton
// const createButton=({text})=>{
//   return(
//     <button>{text}</button>    
//   );
// }
// //Manera correcta
// //Los componentes deben ser llamados por PascalCase
// const Button=({text})=>{
//   return(
//     <button >{text}</button>    
//   );
// }
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.Fragment>
  //   {createButton({text:'Mal :c'})}
  //   <Button text="Bien :D"/>
  // </React.Fragment>
  <App/>
)
