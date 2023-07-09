//Permite estados, leer documentacion
import { useState } from "react";

//Las props deben ser inmutables
// Si quieres modificar una prop
// Crea una nueva variable con nombre distinto 
export function TwitterFollowCard({children,userName='default',name,initialIsFollowing}) {
    //useState tienes dos posiciones [0]=estado 1[función para cambiar estado]
    // const state= useState(false);

    //Al pasar un prop para inicializar, solo se inicializa una vez
    const [isFollowing,setIsFollowing] =useState(initialIsFollowing)

    // https://unavatar.io/#/
    // Avatar web
    //Los estilos en linea se mandan como objetos
    const text = isFollowing ? 'Siguiendo':'Seguir';
    //Estilos condicionales
    const btnClassName = isFollowing
    ?'tw-followCard-button is-following'
    :'tw-followCard-button'
    const handleClick =()=>{
        //Cambia el estado del boton 
        setIsFollowing(!isFollowing);
    }
    // console.log('En la rama hijo [TwitterFollowCard]se ha renderizado:',userName); 
    return (
        // swift
        <article className='tw-followCard'>
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/${userName}`}
                    alt="Avatar" />
                <div className="tw-followCard-info">
                    {/* Children es un prop con nombre reservado  */}
                    <strong>{name}</strong>
                    <span
                        className="tw-followCard-infoUserName">
                            @{userName}
                    </span>
                </div>
            </header>
            <aside>
                <button className={btnClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}