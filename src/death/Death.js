import React from 'react'
import s from './death.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Death({match}) {
    const {deathId} = match.params
    const [obj, setObj] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect( async() =>{
        const objDeathFetch = fetch('https://breakingbadapi.com/api/deaths').then(es => es.json())

        const objDeath = await objDeathFetch.then(res => res.find(data => data.death_id === Number(deathId)))

        // console.log(objDeath);


      if(objDeath !== undefined){


        const fetchVictim = fetch('https://breakingbadapi.com/api/characters').then(res =>res.json())

        const objVictim = await fetchVictim.then(res2 => res2.find(data => data.name === objDeath.death))

        // console.log(objVictim);



        const fetchCulprit = fetch('https://breakingbadapi.com/api/characters').then(res =>res.json())

        const objCulprit = await fetchCulprit.then(res2 => res2.find(data => data.name === objDeath.responsible))

        // console.log(objCulprit);



        const finalObj = {...objDeath, imgV: objVictim.img, imgC: objCulprit.img}

        setObj(finalObj)
        setLoading(false)
    }else{
        setObj('not found')
        setLoading(false)
    }
    }, [])

    if(loading) {
        return <div style={{height: '100vh'}}><h1 style={{fontSize:'140px', color: 'pink'}}>LOADINGGGGG....</h1></div>
        
    }
    else if(obj === 'not found' && loading === false){
        console.log('test');
        return <div style={{height: '100vh'}}><h1 style={{fontSize:'140px', color: 'pink'}}>DEATH NOT FOUNDD</h1></div>
    }else{
        const {death, responsible:killer,  cause, last_words:ls,  imgC, imgV} = obj
        console.log(obj);
    return (
       
        <div className={s.main}>

           <div className={s.title}>
               <h1 className={s.maintitle}>{death}'s Death</h1>
           </div>

           <div className={s.versus}>
               <div className={s.victim}>
                   <div className={s.h1v}><h1>Death Of</h1></div>
                   <div className={s.victImg} style={{backgroundImage: `url(${imgV})`}}>
                       
                   </div>
                   <div className={s.victname}>

                    <h2>{death}</h2>
                   </div>
               </div>
               <div className={s.causediv}>
                   <div className={s.cause}>
                        <p>{cause}</p>
                   </div>
               </div>
               <div className={s.culprit}>
                   <div className={s.h1d}><h1>Killed By</h1></div>
                   <div className={s.culpimg} style={{backgroundImage: `url(${imgC})`}}>

                   </div>
                   <div className={s.culpname}>
                     <h2>{killer}</h2>
                   </div>
               </div>

           </div>
           <div className={s.final}>
               <h3>Last Words</h3>
               <p>{ls}</p>
           </div>

        </div>
    )
}
}
