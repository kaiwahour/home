import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './AppRouter.css'

// These should each return a single Component/function representing the page
import Home from './Home'
import About from './About'
import Contributing from './Contributing'
import Faq from './Faq'
import Footer from './Footer';
import Translating from './Translating'

const AppRouter = () => {
  return (
    <Router className="appRouter" basename={'/home'}>
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

          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/faq/" component={Faq} />
        <Route path="/about/" component={About} />
        <Route path="/contributing/" component={Contributing} />
        <Route path="/translating/" component={Translating} />
      </div>

      <Footer />

    </Router>


  );
}

export default AppRouter;