import React, {Component} from 'react';
import axios from 'axios';
import './News.css'

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      component_language: 'en',   // English by default for now
      stories: [], // This should be fetched in componentDidMount() with real data
    }

    this.toggleLanguage = this.toggleLanguage.bind(this);
  }

  componentDidMount() {
    axios.get("/fakeApi/fakeNews.json")
      .then(response => {
        const stories = response.data;
        console.log(stories);
        this.setState({ stories });
      })
      .catch(error => {
        console.log("Something went wrong.", error);
      });
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