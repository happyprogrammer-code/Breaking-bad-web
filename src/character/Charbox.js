import s from './charbox.module.css'
import React from 'react'


const Charbox = ({name, img}) =>{
   return(
       <div className={s.Charbox} style={{backgroundImage: `url(${img})`}}>
           <div className={s.overlay}>
              <h1>{name}</h1> 
              <p>Lorem ipsum dolor, sit amet
                 consectetur adipisicing elit. 
                 Reiciendis incidunt architecto ratione quia.
              </p>   
           </div> 
       </div>
   )
} 


export default Charbox
