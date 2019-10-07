import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Home.css';
import News from './News'

export default class Home extends Component {
  render() {
    /* Settings for carousel */
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: false,
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

    return (
      <div>
        {/* Space here to put special event banners, sponsor messages, etc. */}

        <div className="title-container">
          <div id="intro-blurb">
            <h2>Welcome to</h2>
            <h1>Kaiwa Hour</h1>
            <h2>Japanese/English Conversation happens</h2>
            <p id="meeting-time">on <b>Tuesdays, 5-7 PM</b> in <b>Olson 53a</b> at UC Davis.</p>
          </div>
        </div>

        <div id="welcome-blurb">
          <h1>Welcome/ようこそ</h1>
          <p>
            Come out to one of our weekly meetings or find us online on <a href="https://discord.gg/fra3Vym">Discord</a>! Speakers of English/Japanese of all levels are welcome!
          </p>
        </div>

        <div id="front-images">
          <Slider {...settings} id="Slider">
            <div>
              <h3 className="slider-caption">Cultural Exchange</h3>
              <img className="image"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Tea_time_%E3%81%8A%E8%8C%B6%E3%81%AE%E6%99%82%E9%96%93.jpg"
                alt="Cultural Exchange"
              />
            </div>
            <div>
              <h3 className="slider-caption">Conversation</h3>
              <img className="image"
                src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Conversation_%285556628632%29.jpg"
                alt="Conversation"
              />
            </div>
            <div>
              <h3 className="slider-caption">Food</h3>
              <img className="image"
                src="https://upload.wikimedia.org/wikipedia/commons/6/62/Tonkatsu_by_ayustety_in_Tokyo.jpg"
                alt="Food"
              />
            </div>
            <div>
              <h3 className="slider-caption">Games</h3>
              <img className="image"
                src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Children_Playing_Chess_on_the_Street_-_Santiago_de_Cuba_-_Cuba.jpg"
                alt="Games"
              />
            </div>
            <div>
              <h3 className="slider-caption">Study</h3>
              <img className="image"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/1901P1040598sillonsalaobraslit_m.jpg"
                alt="Study"
              />
            </div>
            <div>
              <h3 className="slider-caption">Networking</h3>
              <img className="image"
                src="https://upload.wikimedia.org/wikipedia/commons/2/29/HND_T2_departures.JPG"
                alt="Networking"
              />
            </div>
          </Slider>
          <p>
            Background photo by <a className="pink" href="https://unsplash.com/@gaspanik">Masaaki Komori</a> on Unsplash.
            Stock photos courtesy of Wikimedia Commons
            </p>
        </div>

        <div className="flex-container">
          <div id="recruitment">
            <h2>Opportunities</h2>
            <p>Kaiwa Hour is a living, growing, thing that needs <em>your</em> help.</p>
            <ul>
              <li>Outreach and Recruitment</li>
              <li>Social Media Presence</li>
              <li>Translators</li>
              <li>Event Planners and Organizers</li>
              <li>Graphic Designers</li>
              <li>Web Programmers</li>
            </ul>
            <p>
              Message us on <a href="https://www.facebook.com/kaiwahour/">Facebook</a> or <a href="https://discord.gg/fra3Vym">Discord</a> if you're interested in boosting your resume while building community!
            </p>
          </div>

          <div>
            <News />
          </div>

          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="kaiwahour"
            options={
              {
                height: 400,
              }
            }
          />
        </div>
      </div>
    );
  }
}
