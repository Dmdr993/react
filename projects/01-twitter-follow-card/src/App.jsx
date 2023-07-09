import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import './App.css'
import { useState } from "react";//hooks
//De hijo a padre no se pueden pasar prop, se hacen por callbacks

export function App() {
    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Angel',
            isFollowing: true
        },
        {
            userName: 'pheralb',
            name: 'Pablo',
            isFollowing: true
        },
        {
            userName: 'dmdr09',
            name: 'Diego Duran',
            isFollowing: true
        },
        {
            userName: 'TMCHeing',
            name: 'Tomas',
            isFollowing: false
        },
    ]
    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) => (

                    <TwitterFollowCard
                    // usar el id de la base de datos como key
                        key={userName}
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFollowing} >

                    </TwitterFollowCard>
                ))
            }
        </section >
    )
}