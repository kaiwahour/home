import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import { TwitterFollowButton } from 'react-twitter-embed';
import { FacebookProvider, Page } from 'react-facebook';

const Footer = () =>
  <div id="footer">

    <div id="socialmedia" className="footerBlock">
      <h4>Social Media</h4>
      <FacebookProvider appId="348662969124728"> {/* oh boy public app id */}
        <Page href="http://www.facebook.com/kaiwahour" colorScheme="dark"/>
      </FacebookProvider>
      <br /> {/* Use a <ul> if you need more links */}
      <TwitterFollowButton screenName={'kaiwahour'}/>
    </div>

    <div id="contacts" className="footerBlock">
      <h4>Contact</h4>
      <h5>Text and Voice Chat</h5>
      <ul>
        <li><a href="https://discord.gg/fra3Vym">
          <img
            id="discord_logo" src="https://discordapp.com/assets/94db9c3c1eba8a38a1fcf4f223294185.png"
            height="40px"
            alt="Discord Logo"
          />
         </a></li>
       </ul>
       <h5>Developers</h5>
       <ul>
        <li><a className="pink" href="https://github.com/kaiwahour/home">GitHub Repository</a></li>
      </ul>
    </div>
    <div id="sponsors-and-affiliates" className="footerBlock">
      <h4>Sponsors and Affiliates</h4>
      <h5>Study Japanese at UC Davis</h5>
      <ul>
        <li><a href="https://www.facebook.com/groups/UCDJapaneseProgram/">UC Davis Japanese Program</a></li>
      </ul>
      <h5>More Japan-related action at UC Davis</h5>
      <ul>
        <li><a href="http://bakuhatsutaikodan.weebly.com/">Bakuhatsu Taiko Dan</a></li>
        <li><a href="https://www.facebook.com/davisanimeclub/">Davis Anime Club</a></li>
        <li><a href="https://jassorg.wordpress.com/">Japanese American Student Society (JASS)</a></li>
        <li><a href="https://www.facebook.com/groups/jlccdavis/">Japanese Language and Culture Connection (JLCC)</a></li>
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
      <p>Copyright 2019</p>
    </div>
  </div>

export default Footer;
