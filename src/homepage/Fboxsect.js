import React from 'react';
import s from './fbox.module.css';
import { Link } from 'react-router-dom';

export default function Fboxsect() {
  return (
    <div className={s.mainall}>
      <Link to="/episode" style={{ color: 'black', textDecoration: 'none' }}>
        <div className={`${s.box} ${s.box1}`}>
          <div className={s.title}>
            <h1>Episode</h1>
          </div>
        </div>
      </Link>
      <Link to="./character" style={{ color: 'black', textDecoration: 'none' }}>
        <div className={`${s.box} ${s.box2}`}>
          <div className={s.title}>
            <h1>Character</h1>
          </div>
        </div>
      </Link>
      <Link to="./quotes" style={{ color: 'black', textDecoration: 'none' }}>
        <div className={`${s.box} ${s.box3}`}>
          <div className={s.title}>
            <h1>Quotes</h1>
          </div>
        </div>
      </Link>
      <Link to="./deaths"style={{ color: 'black', textDecoration: 'none' }}>
        <div className={`${s.box} ${s.box4}`}>
          <div className={s.title}>
            <h1>Deaths</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}
