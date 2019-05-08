import React from 'react';
import './Home.css'

const Home = () =>
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
  </div>

export default Home;