import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import { TwitterFollowButton } from 'react-twitter-embed';
import { FacebookProvider, Like } from 'react-facebook';

const Footer = () =>
  <div id="footer">
    <div id="socialmedia" className="footerBlock">
      <h4>Find Us on Social Media</h4>
      <TwitterFollowButton screenName={'kaiwahour'}/>
      <FacebookProvider appId="348662969124728"> {/* oh boy public app id */}
        <Like href="http://www.facebook.com/kaiwahour" colorScheme="dark" showFaces share /> 
      </FacebookProvider>
      {/* Other links here */}
      <ul>
        <a href="https://discord.gg/fra3Vym">
          <img 
            id="discord_logo" src="https://discordapp.com/assets/94db9c3c1eba8a38a1fcf4f223294185.png"
            height="40px"
          />
         </a>
      </ul>
    </div>

    <div id="sponsors-and-affiliates" className="footerBlock">
      <h4>Sponsors and Affiliates</h4>
      <p>We are proudly independent! (For now...)</p>
    </div>

    <div id="language-switcher" className="footerBlock">
      <h4>This Page in Other Languages</h4>
      <ul>
        <li><Link className="language" to="/translating?lang=jp">日本語</Link></li>
        <li><Link className="language" to="/translating?lang=zh">中文</Link></li>
        <li><Link className="language" to="/translating?lang=ko">한국어</Link></li>
        <li><Link className="language" to="/translating?lang=ko">Español</Link></li>
      </ul>
    </div>
    <div id="legal-stuff" className="footerBlock">
      <p>Last Updated May 2019 — Copyright 2019</p>
    </div>
  </div>

export default Footer;
