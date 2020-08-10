import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from './img/pngwave.png';
import s from './App.module.css';
import './Global.css';
import headerImage from './bg/Group_20.png';
import mobileHeaderImage from './bg/Group_12.png';
import BlackSect from './Blacksect';
import WhiteSect from './Whitesect';
import Fboxsect from './Fboxsect';

export class App extends Component {
  render() {
    return (
      <>
        <div className="mainall">
          <section className={s.header}>
            <nav>
              <div className="container">
                <div className={s.navgrid}>
                  <div className={s.navlogo}>
                    {' '}
                    <img src={mainLogo} alt="MAIN LOGO" />
                  </div>
                  <div className={s.links}>
                    <div className={s.link}>
                      <Link to='/episode'style={{ color: 'black', textDecoration: 'none' }}>
                        <h3>Episodes</h3>
                      </Link>
                    </div>
                    <div className={s.link}>
                      <Link to="/character"style={{ color: 'black', textDecoration: 'none' }}>
                        <h3>Characters</h3>
                      </Link>
                    </div>
                    <div className={s.link}>
                      <Link to="quotes"style={{ color: 'black', textDecoration: 'none' }}>
                        <h3>Quotes</h3>
                      </Link>
                    </div>
                    <div className={s.link}>
                      <Link to="./deaths"style={{ color: 'black', textDecoration: 'none' }}>
                        <h3>Deaths</h3>
                      </Link>
                    </div>
                  </div>
                  <div className={s.search}>
                    <div className={s.input}>
                      <input type="text" name="" id="" placeholder="Search" />
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <div className={s.actuallheader}>
              <div className="container">
                <img src={mobileHeaderImage} alt="" className={s.mobileimg} />

                <div className={s.texts}>
                  <h1>BREAKING BAD</h1>
                  <p>
                    Premise. Set in Albuquerque, New Mexico, between 2008 and
                    2010 , Breaking Bad follows Walter White, a meek high school
                    science teacher who transforms into a ruthless player in the
                    local methamphetamine drug trade, driven by a desire to
                    provide for his family after being diagnosed with terminal
                    lung cancer.
                  </p>
                </div>
                <div className={s.bigimg}>
                  <img src={headerImage} alt="" />
                </div>
                <div className={s.btn}>
                  <input type="button" value={'download'.toUpperCase()} />
                </div>
              </div>
            </div>
          </section>
          <BlackSect />
          <WhiteSect />
          <Fboxsect />
        </div>
      </>
    );
  }
}

export default App;
