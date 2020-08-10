import React from 'react'
import s from './mainquotes.module.css'
import QuoteBox from './QuoteBox'
import { useState } from 'react'
import { useEffect } from 'react'

export default function MainQuotes() {
    const [qArr, setQArr] = useState([])
    const [loading, setLoading] = useState(true)
    const [usedArr, setUsedArr] = useState([])

    useEffect(() =>{
        fetch('https://breakingbadapi.com/api/quotes')
        .then(res => res.json()).then(res =>{
            setQArr(res)
            setUsedArr(res)
            setLoading(false)
        })
    }, [])

    const ev = e =>{

        const {value} = e.target

        const newarr = qArr.filter(data => data.quote.toLowerCase().indexOf(value.toLowerCase()) > -1)

        setUsedArr(newarr)

    }

    if(loading){
        return <div style={{height: '100vh'}}><h1 style={{fontSize:'140px', color: 'pink'}}>LOADINGGGGG....</h1></div>

    }
    const BoxArr = usedArr.map(data => <QuoteBox q={data.quote} a={data.author}/>)
    return (
        <div className={s.main}>
        <div className={s.search}>
          <div className={s.stitle}>
            <h1>Search Episode</h1>
          </div>
          <div className={s.searchbox}>
            <input type="text" name="" id="" input="Input Quote" onChange={(e) => ev(e)}/>
          </div>
        </div>
        <div className={s.characterBoxes}>
         

                {BoxArr}     

         
        </div>
      </div>
    )
}
