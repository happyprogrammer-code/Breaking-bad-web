import React from 'react';
import bbfiles from './bg/pngbarn.png';
import s from './sect.module.css';

const Blacksect = (props) => {
  return (
    <div className={s.main}>
      <div className="container">
        <div className={s.sectgrid}>
          <div className={s.img}>
            <img src={bbfiles} alt="" />
          </div>
          <div className={s.texts}>
            <h1>Why breaking bad?</h1>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blacksect;
