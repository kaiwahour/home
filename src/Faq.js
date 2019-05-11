import React from 'react';
import './Faq.css';

const Faq = () =>
  <div className="Faq">
    <div className="App-content">
      <h2>Frequently Asked Questions (FAQ)</h2>

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


    </div>
  </div>

export default Faq;