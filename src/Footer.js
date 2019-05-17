import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import { TwitterFollowButton } from 'react-twitter-embed';
import { FacebookProvider, Like } from 'react-facebook';

const Footer = () =>
  <div id="footer">
    <div id="socialmedia" className="footerBlock">
      <p>FIND US ON SOCIAL MEDIA</p>
      <TwitterFollowButton screenName={'kaiwahour'}/>
      <FacebookProvider appId="348662969124728"> {/* oh boy public app id */}
        <Like href="http://www.facebook.com/kaiwahour" colorScheme="dark" showFaces share /> 
      </FacebookProvider>
      <ul>
        <a  href="https://discord.gg/fra3Vym"><img src="https://discordapp.com/assets/e4923594e694a21542a489471ecffa50.svg"/></a>
      </ul>
    </div>

    <div id="sponsors-and-affiliates" className="footerBlock">
      <p>SPONSORS AND AFFILIATES</p>
      <p>We are proudly independent! (For now...)</p>
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
