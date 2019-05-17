import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import { TwitterFollowButton } from 'react-twitter-embed';
import { FacebookProvider, Page } from 'react-facebook';

const Footer = () =>
  <div id="footer">
    <div id="socialmedia" className="footerBlock">
      <h4>Find Us on Social Media</h4>
      <TwitterFollowButton screenName={'kaiwahour'}/>
      <FacebookProvider appId="348662969124728"> {/* oh boy public app id */}
        <Page href="http://www.facebook.com/kaiwahour" colorScheme="dark"/>
      </FacebookProvider>
      {/* Other links here */}
      <ul>
        <a href="https://discord.gg/fra3Vym">
          <img
            id="discord_logo" src="https://discordapp.com/assets/94db9c3c1eba8a38a1fcf4f223294185.png"
            height="40px"
            alt="Discord Logo"
          />
         </a>
      </ul>
    </div>

    <div id="sponsors-and-affiliates" className="footerBlock">
      <h4>Sponsors and Affiliates</h4>
      <h5 className="italics">Unofficial Connections</h5>
      <a className="pink" href="http://bakuhatsutaikodan.weebly.com/">Bakuhatsu Taiko Dan</a><br/>
      <a className="pink" href="https://www.facebook.com/davisanimeclub/">Davis Anime Club</a><br/>
      <a className="pink" href="https://jassorg.wordpress.com/">Japanese American Student Society (JASS)</a><br/>
      <a className="pink" href="https://www.facebook.com/groups/jlccdavis/">Japanese Language and Culture Connection (JLCC)</a><br/>
      <a className="pink" href="https://www.facebook.com/groups/UCDJapaneseProgram/">UC Davis Japanese Program</a>
    </div>

    <div className="footerBlock">
      <h4>Contact</h4>
      <ul>
        <li>Use FB for now.</li>
        <li>Or, <a className="pink" href="https://github.com/kaiwahour">GitHub</a> for dev things.</li>
      </ul>
    </div>

    <div id="language-switcher" className="footerBlock">
      <h4>Translations</h4>
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
