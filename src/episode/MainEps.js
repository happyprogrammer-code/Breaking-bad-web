import React, {useState, useEffect} from 'react'
import s from './maineps.module.css'
import {Link} from 'react-router-dom'
import EpsBox from './EpsBox'


const MainEps = props =>{

    const [epsArr, setEpsArr] = useState([])
    const [usedState, setUsedState] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() =>{
        fetch('https://breakingbadapi.com/api/episodes')
        .then(res => res.json())
        .then(res =>{
            setEpsArr(res)
            setUsedState(res)
            setLoading(false)
            
        })
    }, [])


    const ev = e =>{
        const {value} = e.target

        const newarr = epsArr.filter(data => data.title.toLowerCase().indexOf(value.toLowerCase()) > -1)

        setUsedState(newarr)
        
    } 

    if(loading){
        return <h1 style={{fontSize: '140px', color: 'pink'}}>LOADINGGG....</h1>

    }else{
    
    const EpsBoxarr = usedState.map((data, index) => <Link to={`/episode/${data.title}`} style={{ color: 'black', textDecoration: 'none' }}><EpsBox key={index} S={data.season} T={data.title} E={data.episode}/></Link>)
     console.log(epsArr)
     return (<div className={s.main}>
        <div className={s.search}>
          <div className={s.stitle}>
            <h1>Search Episode</h1>
          </div>
          <div className={s.searchbox}>
            <input type="text" name="" id="" input="the episode's name"onChange={e =>ev(e)}/>
          </div>
        </div>
        <div className={s.characterBoxes}>
         

            {EpsBoxarr}

         
        </div>
      </div>)
}

}



export default MainEps