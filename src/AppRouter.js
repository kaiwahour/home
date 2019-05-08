import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './AppRouter.css'

// These should each return a single Component/function representing the page
import Home from './Home'
import Faq from './Faq'
import About from './About'
import Contributing from './Contributing'

const Translating =  () =>
  <div>
    <h2>Translating</h2>
    <p>
      We willl provide this website in multiple languages, translated by human 
      beings with idiomatic flair!
    </p>
  </div>

const AppRouter = () => {
  return (
    <Router className="appRouter">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/faq/">FAQ</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/contributing/">Contributing</Link>
            </li>
            <div id="language-switcher">
              <li> 
                <a href="/translating?lang=jp">日本語</a>
              </li>
              <li>
                <a href="/translating?lang=zh">中文</a>
              </li>
              <li>
                <a href="/translating?lang=ko">한국어</a>
              </li>
              <li>
                <a href="/translating?lang=ko">Español</a>
              </li>
            </div>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/faq/" component={Faq} />
        <Route path="/about/" component={About} />
        <Route path="/contributing/" component={Contributing} />
        <Route path="/translating/" component={Translating} />
      </div>
    </Router>
  );
}

export default AppRouter;