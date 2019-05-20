import React from 'react';
import './Faq.css';

const Faq = () =>
  <div className="Faq">
    <div className="App-content">
      <h1>FAQ</h1>
      <p>
        Here are some Frequently Asked Questions about Kaiwa Hour, 
        arranged by topic.
      </p>

      <h2>Logistics</h2>
      <div className="Question">
        <h3>I'm lost! How do I get to Olson 53a?</h3>  
        <p>
          First, make sure you are at UC Davis. Olson Hall is located to the 
          near the quad (big grass square) and the main library. Olson 53a is 
          located downstairs in the basement. Check out the official 
          UC Davis <a href="https://campusmap.ucdavis.edu/">campus map</a> for
          more help.
        </p>
      </div>
      <div className="Question">
        <h3>Where can I park for free?</h3>
        <p>
          Very near campus, finding free parking is pretty much impossible. 
          However, if you are able to find street parking in Downtown Davis
          (around A Street to G Street, 1st Street to Fifth Street) which is
          located to the East of Campus, it is a not-so-long (less than 20 
          minutes) walk into campus. 
        </p>
      </div>
      <div className="Question">
        <h3>Is there a membership fee? Required registration?</h3>
        <p>No and no!</p>
      </div>

      <h2><i>Knock knock,</i> Who's there?</h2>
      <div className="Question">
        <h3>Are non-students welcome?</h3>
        <p>
          Yes! While the majority of attendees of Kaiwa Hour are UC Davis students or
          otherwise affiliated with UC Davis, non-students (including alumni, out of 
          town visitors, etc.) are welcome.
        </p>
      </div>
      <div className="Question">
        <h3>Do I need to already speak Japanese to attend?</h3>
        <p>
          More Japanese will certainly make your experience richer. However, 
          we don't restrict attendance based on skill level. Be prepared to 
          dive in and learn fast!
        </p>
      </div>

      <h2>Meetings and Activities</h2>
      <div className="Question">
        <h3>What do you do?</h3>
        <p>
          Kaiwa Hour has no fixed plan or schedule. Rather, we change what we 
          do based on what attendees want to do. During meetings, we do
          things like:
          <ul>
            <li>Have conversations (of course)</li>
            <li>Play board/card/language games</li>
            <li>Share snacks</li>
            <li>Do homework (especially interview based assignments)</li>
            <li>Draw pictures</li>
            <li>Struggle to remember <i>Kanji</i></li>
            <li>Exchange contact information</li>
          </ul>
        </p>
        <p>On rarer occasions, we have also seen:</p>
        <ul>
          <li>Juggling, <i>kendama</i>, and other tricks</li>
          <li>Fortune telling</li>
          <li>Web programming (hi, developers!)</li>
        </ul>
        <p>
          Kaiwa Hour welcomes all sorts of people with all sorts of 
          interests. All we ask is that you be respectful of others and
          don't do anything that will get us in trouble with the university
          (that means no smoking or drinking on campus, for instance).
        </p>
      </div>
      <div class="Question">
        <h3>I like food?</h3>
        <p>
          After Kaiwa Hour, we often go for <i>Kaiwa gohan</i> (会話後飯)
          "after Kaiwa eats", usually somewhere within walking distance in
          Downtown Davis.
        </p>
        <p>
          During meetings, attendees frequently bring snacks to share. If you
          do so, please remember to clean up after yourself so that we can 
          continue using Olson 53a for meetings!
        </p>
      </div>
      <div class="Question">
        <h3>Can you do <i>XYZ?</i></h3>
        <p>
          In the past, attendees have gone ahead and organized events like:
          <ul>
            <li><i>Karaoke</i> outings</li>
            <li>House parties</li>
            <li>Fourth of July Barbecues</li>
            <li>Super Market Carpools</li>
          </ul>
        </p>
        <p>
          Communicate with the people around you and make these things 
          happen; Kaiwa Hour is not your mother. But it is a place to
          meet people to make plans with!
        </p>
      </div>


    </div>
  </div>

export default Faq;