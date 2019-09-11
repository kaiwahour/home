import React, {Component} from 'react';
import axios from 'axios';
import './News.css'

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      component_language: 'en',   // English by default for now
      stories: [], // This should be fetched in componentDidMount() with real data
      to_display: 2, // Display 2 stories to start by default
    }

    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.onLoadMoreClick = this.onLoadMoreClick.bind(this);
  }

  componentDidMount() {
    axios.get("https://raw.githubusercontent.com/kaiwahour/fakeApi/master/fakeNews.json")
      .then(response => {
        const stories = response.data.reverse(); 
        /* TODO: come up with a better solution than reversing for 
                 chronological order */
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

  onLoadMoreClick(){
    const INCREMENT_VALUE = 2;
    let newToDisplay; 
    if (this.state.to_display + INCREMENT_VALUE > this.state.stories.length) {
      newToDisplay = this.state.stories.length;
    } else {
      newToDisplay = this.state.to_display + INCREMENT_VALUE;
    }
    ; 
    console.log("Here's your value", newToDisplay);
    this.setState({ to_display: newToDisplay});
    console.log(this.state)
  }

  render() {
    return(
      <div className="News">
        <h2>
          What's Happening
          <button id="translationButton" onClick={this.toggleLanguage}>EN/JP</button>
        </h2>
        <div className = "news-container App-content">
          {this.state.stories.length >= this.state.to_display ? 
            this.state.stories.slice(0, this.state.to_display).map(story => {
              return NewsStory({...story[this.state.component_language], id: story.id, date: story.date});
            })
            : <p>Something went wrong! There is no stories to display!</p>
          }
        </div>
        <div className = "news-footer">
          {this.state.stories.length > this.state.to_display 
            ? <button onClick={this.onLoadMoreClick}>Load more...</button>
            : <div />  /* Empty div */
          }
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