import React from 'react';
import bbfiles from './img/pngwave_1.png';
import s from './whitesect.module.css';


const Blacksect = (props) => {
  return (
    <div className={s.main}>
      <div className="container">
        <div className={s.sectgrid}>
          
          <div className={s.texts}>
            <h1>Episodes</h1>
            <p>
              Premise. Set in Albuquerque, New Mexico, between 2008 and 2010 ,
              Breaking Bad follows Walter White, a meek high school science
              teacher who transforms into a ruthless player in the local
              methamphetamine drug trade, driven by a desire to provide for his
              family after being diagnosed with terminal lung cancer.
            </p>
            <br />
            <p>
              Premise. Set in Albuquerque, New Mexico, between 2008 and 2010 ,
              Breaking Bad follows Walter White, a meek high school science
              teacher who transforms into a ruthless player in the local
              methamphetamine drug trade, driven by a desire to provide for his
              family after being diagnosed with terminal lung cancer.
            </p>
            <div className={s.button}><input type="button" value="Download"/></div>
          </div>
          <div className={s.img}>
            <img src={bbfiles} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blacksect;
