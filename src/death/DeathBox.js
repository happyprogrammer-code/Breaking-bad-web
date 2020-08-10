import React from 'react'
import s from './deathbox.module.css'

export default function DeathBox({n, c, i}) {
    return (
        <div className={s.Charbox} style={{backgroundImage: `url(${i})`}}>
        <div className={s.overlay}>
           <p className={s.p1}>{n}</p> 
           <p className={s.p}>{c}
           </p>   
        </div> 
    </div>
    )
}
