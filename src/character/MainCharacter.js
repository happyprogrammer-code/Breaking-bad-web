import React, {useState, useEffect} from 'react';
import s from './MainCharacter.module.css'
import Charbox from './Charbox'
import {Link} from 'react-router-dom'


const MainCharacter = () => {

  const [search, setSearch] = useState('')
  const [charrArr, setCharArr] = useState([])
  const [loading, setLoading] = useState(true)

  

  useEffect(() =>{

    fetch(`https://breakingbadapi.com/api/characters?name=${search}`)
    .then(res => res.json())
    .then(res =>{
      setCharArr(res)
    })
    setLoading(false)

  }, [search])

 const ev = e =>{
   const {value} = e.target

  setSearch(value)
 
 }

const boxArr = charrArr.map(data => <Link to={`/character/${data.name}`} style={{textDecoration:'none'}}><Charbox name={data.name} img={data.img}/></Link> )

  if(loading === true){
    return <div style={{height: '100vh'}}><h1 style={{fontSize:'140px', color: 'pink'}}>LOADINGGGGG....</h1></div>
  }else{
   return (<div className={s.main}>
      <div className={s.search}>
        <div className={s.stitle}>
          <h1>Search Character</h1>
        </div>
        <div className={s.searchbox}>
          <input type="text" name="" placeholder="imput character's name" id="" onChange={ev}/>
        </div>
      </div>
      <div className={s.characterBoxes}>
        {boxArr}
      </div>
    </div>)
  }
};

export default MainCharacter;
