import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import './App.css'
import { useState } from "react";//hooks
//De hijo a padre no se pueden pasar prop, se hacen por callbacks

export function App() {
    // https://unavatar.io/#/
    // Avatar web
    //Los estilos en linea se mandan como objetos

    //Puedes enviar funciones como parametro
    // const formatUserName = (userName) => `@${userName}`;
    const [name, setName] = useState('midudev');
    const nasa = { initialIsFollowing: false, userName: "nasa", name: "NASA" }
    //Los componentes crean elementos
    //React renderiza Elementos
    //React renderiza de los padres hacia arriba 
    //Independientemente si hay cambios o no
    // console.log("Se ha renderizado", name)
    return (
        <section className="App">
            <TwitterFollowCard
                // Pasando estado como props
                initialIsFollowing
                userName={name}
                name="Midudev"
            >
                {/* Lo que envuelve se llama children */}
                <strong>Midudev</strong>
            </TwitterFollowCard>
            <TwitterFollowCard

                initialIsFollowing={true}
                userName="dmdr09"
                name="Diego Duran"
            >
                <strong>Diego Duran</strong>
            </TwitterFollowCard>
            <TwitterFollowCard
                initialIsFollowing={false}
                name="Default"
            >
                <strong>Valor por defecto</strong>
            </TwitterFollowCard>
            <TwitterFollowCard {...nasa}>
                <strong>Como objeto(Mala práctica)</strong>
            </TwitterFollowCard>
            <button onClick={() => setName('pedro')}>
                Cambio de nombre
            </button>
        </section>
    )
}