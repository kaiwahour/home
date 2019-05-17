import React, {Component} from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Slider from 'react-slick';
import './Home.css';

export default class Home extends Component{
    render(){
        let settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
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
                <img src="gym.jpg"/>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
              <div>
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
            </Slider>
            <p>Photo by <a href="https://unsplash.com/@gaspanik">Masaaki Komori</a> on Unsplash</p>
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
