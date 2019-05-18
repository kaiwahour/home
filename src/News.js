import React, {Component} from 'react';
import './News.css'

/* Temporary fake data */
let stories = [
  {
    id: 1,
    date: "05/22/2019",
    en: {
      title: "Website development goes well!",
      body: "We are making a thing and it is looking good."
    } 
  },
  {
    id: 2,
    date: "05/22/2019",
    en: {
      title: "Meetings continue",
      body: "You know the drill; Tuesdays from 5-7 PM in Olson 53a."
    }
  }
]

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stories: stories, // This should be fetched in componentDidMount() with real data
    }
  }

  render() {
    return(
      <div className="News App-content">
        <h2>News & Announcements</h2>
        <div className = "news-container">
          {this.state.stories.map(NewsStory)}
        </div>
        <hr />
      </div>
    );
  }
}

const NewsStory = (props) =>
  <div className="NewsStory">
    <h4>{props.en.title}</h4>
    <p>{props.date}: {props.en.body}</p>
  </div>

export default News;