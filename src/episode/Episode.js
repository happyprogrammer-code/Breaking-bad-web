import React, {useState, useEffect} from 'react'
import s from './episode.module.css'
import EpisodeCast from './EpisodeCast'
import { Link } from 'react-router-dom'

export default function Episode({match}) {
    const {episodeName} = match.params
    const [loading, setLoading] = useState(true)
    const [episode, setEpisode] = useState({})
    const [cList, setCList] = useState([])

    useEffect(() =>{
      fetch('https://breakingbadapi.com/api/episodes')
      .then(res => res.json()).then(res =>{
          const temp = res.find(data => data.title === episodeName)

          if(temp !== undefined){
            const {characters} = temp
            fetch('https://breakingbadapi.com/api/characters')
            .then(res2 => res2.json()).then(res2 =>{
            let temparr = []
                characters.forEach(data =>{
                   const temparr2 = res2.filter(data2 => data2.name === data )
                  
                 temparr = [...temparr, ...temparr2]
                })
                setCList(temparr)
            })
            setEpisode(temp)
            setLoading(false)
              
          }
      })
    }, [])


    


    if(loading){
        return <div style={{height: '100vh'}}><h1 style={{fontSize:'140px', color: 'pink'}}>LOADINGGGGG....</h1></div>
        
    }
    else if(episode === {}){
        
        return <div style={{height: '100vh'}}><h1 style={{fontSize:'140px', color: 'pink'}}>EPISODE NOT FOUND.</h1></div>
    }
    else{
    const charepsboxarr = cList.map(data => <Link to={`/character/${data.name}`} style={{textDecoration:'none'}}><EpisodeCast name={data.name} img={data.img}/></Link>)
    const { title:ti, season:se, episode:e } = episode
    return (
        <div className={s.main}>
            <div className={s.title}>
                <div className={s.seasontit}><h1>S{se}</h1></div>
                <div className={s.epstit}><h1>EPS{e}</h1></div>
            </div>
            <div className={s.epsname}>
                <h1>TITLE</h1>
                <h1>{ti.toUpperCase()}</h1>
            </div>
            
            <hr/>

            <div className={s.cast}>

               {charepsboxarr}

            </div>
        </div>
    )}
}
