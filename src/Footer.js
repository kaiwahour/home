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
      <p>(Sponsors and Affiliates)</p>
    </div>

    <div id="language-switcher" className="footerBlock">
      <p>This page in other languages</p>
      <ul>
        <li><Link to="/translating?lang=jp">日本語</Link></li>
        <li><Link to="/translating?lang=zh">中文</Link></li>
        <li><Link to="/translating?lang=ko">한국어</Link></li>
        <li><Link to="/translating?lang=ko">Español</Link></li>
      </ul>
    </div>
    <div id="legal-stuff" className="footerBlock">
      <p>Last updated May 2019</p>
      <p>Copyright 2019</p>
    </div>
  </div>

export default Footer; 