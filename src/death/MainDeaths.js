import React from 'react';
import s from './maindeath.module.css'
import DeathBox from './DeathBox'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function MainDeaths() {

  const [baseArr, setBaseArr] = useState([])
  const [usedArr, setUsedArr] = useState([])
  const [loading, setLoading] = useState(true)

  useState(async() =>{
      
    const nameFetch = fetch('https://breakingbadapi.com/api/characters').then(res => res.json())
    const deathFetch = fetch('https://breakingbadapi.com/api/deaths').then(res => res.json())

    const nameArr = await nameFetch.then(res => res.map(data => {return {name: data.name, i: data.img}}))
    const deathArr = await deathFetch.then(res => res)


    const semiFinalArr  = []
    const nvm = []

    // console.log(deathArr);

    nameArr.forEach(data =>{
      const temp =  deathArr.find(data2 => data2.death === data.name )
      console.log(temp);
      if(temp !== undefined){
        console.log(temp);
        semiFinalArr.push({...temp, i: data.i})
      }else{
        nvm.push(temp)
      }
    })

     const finalArr = []

     nameArr.forEach(data =>{
          const temp = semiFinalArr.find(data2 => data2.responsible === data.name)

          if(temp !== undefined){
            finalArr.push(temp)
          }
     })
    setBaseArr(finalArr)
    setUsedArr(finalArr)
    setLoading(false)
  }, [])
  const ev = e =>{
    
    const {value} = e.target

    const newarr = baseArr.filter(data => data.death.toUpperCase().indexOf(value.toUpperCase()) > -1)

    setUsedArr(newarr)

  }
  if(loading){
    return <div style={{height: '100vh'}}><h1 style={{fontSize:'140px', color: 'pink'}}>LOADINGGGGG....</h1></div>

  }
  else{

    const deathBoxArr = usedArr.map(data => <Link to ={`/deaths/${data.death_id}`} style={{textDecoration:'none'}}><DeathBox i={data.i} n={data.death} c={data.cause}/></Link>)

    return (
    
    <div className={s.main}>
        <div className={s.search}>
          <div className={s.stitle}>
            <h1>Search Character Deaths</h1>
          </div>
          <div className={s.searchbox}>
            <input type="text" name="" id="" placeholder="insert character's name" onChange={e => ev(e)}/>
          </div>
        </div>
        <div className={s.characterBoxes}>
            {deathBoxArr}
        </div>
      </div>
      
    )}
}
