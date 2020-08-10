import React from 'react'
import s from './quotebox.module.css'

export default function QuoteBox({q, a}) {
    return (
        <div className={s.main}>
                <div className={s.quote}><p>{q}</p></div>
                <div className={s.author}><p>{a}</p></div>
         </div>
    )
}
