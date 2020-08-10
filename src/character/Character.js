import React, { useState, useEffect } from 'react';
import s from './character.module.css'

const Character = ({ match }) => {
    const {charaname} = match.params
    const [character, setCharacter] = useState({})
    const [loading, setLoading] = useState(true)
    

    useEffect(() =>{
        fetch(`https://breakingbadapi.com/api/characters?name=`)
        .then(res => res.json())
        .then(res =>{
            const characterN = res.find(data => data.name === charaname)
            console.log(characterN);
            setCharacter(characterN)
            setLoading(false)
        })
    }, [])
    
    if(loading){
        return <div style={{height: '100vh'}}><h1 style={{fontSize:'140px', color: 'pink'}}>LOADINGGGGG....</h1></div>
    }
    else if(character === undefined){
         return <div style={{height: '100vh'}}><h1 style={{fontSize:'140px', color: 'pink'}}>CHARACTER NOT FOUND</h1></div>
    } else{
    
     const {name, birthday:d, img, status} = character
    return(
    <div className={s.main}>  
        <div className={s.title}>
        <h3>{name}'s profile</h3>
        </div>
        <div className={s.inside}>

                <div className={s.photos}>
                <div className={s.photo} style={{backgroundImage: `url(${img})`}}>
                    
                </div> 
                </div>
                <div className={s.profile}>
                    <div className={`${s.prof} ${s.name}`}>
                        <p>Name: {name}</p>
                    </div>
                    <div className={`${s.prof} ${s.bd}`}>
                        <p>Birth Date: {d}</p>
                    </div>
                    <div className={`${s.prof} ${s.sta}`}>
                         <p>Status: {status}</p>
                    </div>
                </div>

        </div>
    </div>  
    )
    }
}

export default Character;



