import React from 'react'
import s from './EpsBox.module.css'

export default function EpsBox({S, E, T}) {
    return (
        
            <div className={s.main}>
                <h1>S{S}</h1><h1>EP{E}</h1>
                <div className={s.eptitl}><p>{T}</p></div>
            </div>
       
    )
}
