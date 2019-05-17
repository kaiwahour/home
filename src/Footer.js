import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import { TwitterFollowButton } from 'react-twitter-embed';

const Footer = () =>
  <div id="footer">
    <div id="social-media" className="footerBlock">
      <p>Find us on social media</p>
      <TwitterFollowButton
        screenName={'kaiwahour'}
      />
      <ul>
        <li><a href="https://www.facebook.com/kaiwahour/">Facebook</a></li>
        <li><a href="https://discord.gg/fra3Vym">Discord</a></li>
      </ul>
    </div>

    <div id="sponsors-and-affiliates" className="footerBlock">
      <p>SPONSORS AND AFFILIATES</p>
    </div>

    <div id="language-switcher" className="footerBlock">
      <p>THIS PAGE IN OTHER LANGUAGES</p>
      <ul>
        <li><Link className="language" to="/translating?lang=jp">日本語</Link></li>
        <li><Link className="language" to="/translating?lang=zh">中文</Link></li>
        <li><Link className="language" to="/translating?lang=ko">한국어</Link></li>
        <li><Link className="language" to="/translating?lang=ko">Español</Link></li>
      </ul>
    </div>
    <div id="legal-stuff" className="footerBlock">
      <p>LAST UPDATED MAY 2019</p>
      <p>COPYRIGHT 2019</p>
    </div>
  </div>

export default Footer;
