import React, {Component} from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Slider from 'react-slick';
import './Home.css';
import News from './News'

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

            <Slider {...settings} id="Slider">
              <div>
                <h3>Hot Pot</h3>
                <img className="image"
                  src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/53295624_2333580953588710_8542725741706477568_o.jpg?_nc_cat=109&_nc_ht=scontent-sjc3-1.xx&oh=3301eb267921a617f649fb4dbce907cc&oe=5D6D402E"
                  alt="Hot Pot"
                />
              </div>
              <div>
                <h3><i>Izakaya</i></h3>
                <img className="image"
                  src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/42045153_2227417317538408_5089713387391156224_o.jpg?_nc_cat=110&_nc_ht=scontent-lax3-1.xx&oh=3caf39b74bb331d20809d34d281e39e3&oe=5D624689"
                  alt="Izakaya"
                />
              </div>
              <div>
                <h3>Foodsies</h3>
                <img className="image"
                  src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/41971929_2227417984205008_5384978129699733504_o.jpg?_nc_cat=101&_nc_ht=scontent-lax3-1.xx&oh=60fcb59fe6991940246f0bee595a6fa3&oe=5D5841F3"
                  alt="Foodsies"
                />
              </div>
              <div>
                <h3>House Party</h3>
                <img className="image"
                  src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/41934075_2227419604204846_5714010948566515712_o.jpg?_nc_cat=103&_nc_ht=scontent-lax3-1.xx&oh=462f2215180c6c98c6844dc5dc9a3efb&oe=5D5417D3"
                  alt="House Party"
                />
              </div>
              <div>
                <h3>At The Gym</h3>
                <img className="image"
                  src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/41954801_2227514500862023_1753684431706521600_n.jpg?_nc_cat=111&_nc_ht=scontent-lax3-1.xx&oh=f83783614b486224dfb8cbb89aef4be8&oe=5D584815"
                  alt="At the Gym"
                />
              </div>
              <div>
                <h3>Safety First</h3>
                <img className="image"
                  src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/16142195_1867299683550175_6997641311702090329_n.png?_nc_cat=107&_nc_ht=scontent-lax3-1.xx&oh=0ab931ad684fba29ac7fa9032baf644e&oe=5D629F52"
                  alt="How to sits"
                />
              </div>
            </Slider>
            <p>Background photo by <a className="pink" href="https://unsplash.com/@gaspanik">Masaaki Komori</a> on Unsplash</p>
          </div>

          <News />

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
