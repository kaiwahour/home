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
    },
    jp: {
      title: "サイト発達よくやる",
      body: "このサイトやつ…かっこいいね"
    }
  },
  {
    id: 2,
    date: "05/22/2019",
    en: {
      title: "Meetings continue",
      body: "You know the drill; Tuesdays from 5-7 PM in Olson 53a."
    },
    jp: {
      title: "ミーティング",
      body: "計画通り　ミーティングが続く。"
    }
  }
]

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      component_language: 'en',   // English by default for now
      stories: stories, // This should be fetched in componentDidMount() with real data
    }

    this.toggleLanguage = this.toggleLanguage.bind(this);
  }

  componentDidMount() {

  }

  toggleLanguage(props){
    this.setState({
      component_language: this.state.component_language === 'en' ? 'jp' : 'en'
    });
  }

  render() {
    return(
      <div className="News">
        <h2>What's Happening
          <button id="translationButton" onClick={this.toggleLanguage}>EN/JP</button>
        </h2>
        <div className = "news-container App-content">
          {this.state.stories.map(story => {
            return NewsStory({...story[this.state.component_language], id: story.id, date: story.date});
          })}
        </div>
        <div className = "news-footer">
          <button>Load more...</button>
        </div>
      </div>
    );
  }
}

const NewsStory = (props) => {
  return(
    <div className="NewsStory" key={props.id}>
      <h4>{props.title}</h4>
      <p>{props.date}—{props.body}</p>
    </div>
  );
}


export default News;