import React, {Component} from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Slider from 'react-slick';
import './Home.css';

export default class Home extends Component{
    render(){
      /* Settings for carousel */
      let settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 5, /* I like fibonacci sequence */
          slidesToScroll: 5,
          initialSlide: 0,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                      dots: true
                  }
              },
              {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      initialSlide: 2
                  }
              }
          ]
      };
    return(
      <div>
        {/* Space here to put special event banners, sponsor messages, etc. */}

        <div className="Home-container">
          <div id="front-text">
            <h1>Welcome to Kaiwa Hour</h1>
            <p id="meeting-time">Meetings are held weekly <b>Tuesday, 5-7 PM</b> in <b>Olson 53a</b> at UC Davis.</p>
          </div>

          <div id="front-images">
            <h3>Images and More</h3>
            <Slider {...settings} id="Slider">
              <div>
                <h3>Uniboil</h3>
                <img className="image" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/53295624_2333580953588710_8542725741706477568_o.jpg?_nc_cat=109&_nc_ht=scontent-sjc3-1.xx&oh=3301eb267921a617f649fb4dbce907cc&oe=5D6D402E"/>
              </div>
              <div>
                <h3>Pls?</h3>
                <img className="image" src="https://i.imgur.com/SVzANip.jpg"/>
              </div>
              <div>
                <h3>By the gym</h3>
                <img className="image" src="images/gym.jpg"/>
              </div>
              <div>
                <h3>Rajas</h3>
                <img className="image" src="images/rajas.jpg"/>
              </div>
              <div>
                <h3>Is it working?</h3>
                <img className="image" src="https://i.imgur.com/JbihQ6q.gif"/>
              </div>
              <div>
                <h3>I is magical?</h3>
                <img className="image" src="https://i.imgur.com/BbwBe6w.png"/>
              </div>
            </Slider>
            <p>Background photo by <a href="https://unsplash.com/@gaspanik">Masaaki Komori</a> on Unsplash</p>
          </div>

          <div className="App-content">
            <h2>News & Announcements</h2>
            <p>This <code>div</code> can have announcements, news stories, or something else.</p>
            <p>We don't want the Twitter component to be super-oversized.</p>
          </div>

          <div>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="kaiwahour"
              options={{height: 400}}
            />
          </div>
        </div>
      </div>
  );
}
}
