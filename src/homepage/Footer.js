import React from 'react';
import s from './footer.module.css';
import FontAwesome from 'react-fontawesome';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footercontainer}>
        <div className={`${s.sect} ${s.sect1}`}>
          <div className={s.footertitle}>
            <p>About us</p>
          </div>
          <div className={s.footerpara}>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book
            </p>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book
            </p>
          </div>
        </div>

        <div className={`${s.sect} ${s.sect2}`}>
          <div className={s.footertitle}>
            <p>Address</p>
          </div>
          <ul>
            <li>
              <span className={s.addresicon}>
                <FontAwesome className={`fas fa-map-marker`} name="?" />
              </span>
              <p>27th avenue Wall st</p>
            </li>
            <li>
              <span className={s.addresicon}>
                <FontAwesome className={`fa fa-facebook`} name="?" />
              </span>
              <p>27th avenue Wall st</p>
            </li>
            <li>
              <span className={s.addresicon}>
                <FontAwesome className="fa fa-envelope"  name="?"/>
              </span>
              <p>27th avenue Wall st</p>
            </li>
          </ul>
        </div>

        <div className={`${s.sect} ${s.sect3}`}>
          <div className={s.footertitle}>
            <p>Contact me</p>
          </div>
          <div className={s.inputs}>
            <div className={s.input}>
              <input type="text" placeholder="Insert your name" />
            </div>
            <div className={s.input}>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="input your order"
              ></textarea>
            </div>
            <div className={s.input}>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
