import React from 'react'
import s from './epscast.module.css'

const EpisodeCast = ({name, img})=>{

    return (
        <div className={s.main} style={{backgroundImage:`url(${img})`}}>
           <div className={s.overlay}>
               
            </div> 
            <p>{name}</p>
        </div>
    )

}




export default EpisodeCast