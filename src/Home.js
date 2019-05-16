import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import './Home.css'

const Home = () =>
  <div>

    {/* Space here to put special event banners, sponsor messages, etc. */}

    <div className="Home-container">
      <div id="front-text">
        <h1>Welcome to Kaiwa Hour</h1>
        <p id="meeting-time">Meetings are held weekly <b>Tuesday, 5-7 PM</b> in <b>Olson 53a</b> at UC Davis.</p>
      </div>

      <div id="front-images">
        <h3>Images and More</h3>
        <p>(A carousel of event images, your photographs, or something else can be put here.)</p>
        <p>Photo by <a href="https://unsplash.com/@gaspanik">Masaaki Komori</a> on Unsplash</p>
      </div>

      <div className="App-content">
        <h2>News & Announcements</h2>
        <p>This <code>div</code> can have announcements, news stories, or something else.</p>
        <p>We don't want the Twitter component to be super-oversized.</p>
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="kaiwahour"
        options={{height: 400}}
      />
    </div>
  </div>
export default Home;