import React, { Component } from 'react';
import './App.css';

// Fontawesome icons
// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

//library.add(faTwitter); // Not sure if this is necessary

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: null,
      quoteIndex: -1,
      viewedQuotes: [],
      text: '',
      author: '',
      songName: '',
      album: '',
      bgColors: ['blueStripe', 'magentaStripe', 'redStripe', 'orangeStripe'],
      currentColor: '',
      bgIndex: -1,
      bgViewed: []
    };
    // Bind functions to this
    this.newQuote = this.newQuote.bind(this);
    this.shareOnTwitter = this.shareOnTwitter.bind(this);
  }

  componentDidMount() {
    // Set title
    document.title = 'Frank Ocean Lyrics';

    // Get JSON from gist
    fetch('https://gist.githubusercontent.com/MDBoticano/d88c9ddd0eedd5d3223ff7b5bc5f0090/raw/de541631b9e409c39e8d835098c6bb01ec1f20c3/lyrics.json')
      .then(response => response.json()) // parses data as json
      .then((data) => {

        // Generate a random index to set initial state
        let randomIndex = Math.floor((Math.random() * data.lyrics.length));

        // Generate random index for color
        let colorInd = Math.floor((Math.random() * this.state.bgColors.length));

        let colorArr = this.state.bgColors;
        let initialColor = colorArr[colorInd];
        console.log(initialColor);

        this.setState({
          lyrics: data.lyrics,
          quoteIndex: randomIndex,
          viewedQuotes: [randomIndex],
          text: data.lyrics[randomIndex].lyric,
          author: data.lyrics[randomIndex].author,
          songName: data.lyrics[randomIndex].songName,
          album: data.lyrics[randomIndex].album,
          currentColor: initialColor,
          bgIndex: colorInd,
          bgViewed: [colorInd]
        });

      })
      .catch(error => this.setState({ error }));
  }

  // New Quote: clears current quote and grabs a new one from JSON
  newQuote() {
    this.getNewQuote();
    this.changeBackground();
  }

  shareOnTwitter() {

  }

  getNewQuote = () => {
    let randomIndex = -1;

    // Get index of a quote not equal to current quote
    do {
      randomIndex = Math.floor((Math.random() * this.state.lyrics.length));
    }
    // Keep looking if it's the same index as our current quote or if the 
    // randomized index exists in our viewedQuotes array
    while (randomIndex === this.state.quoteIndex ||
      this.state.viewedQuotes.indexOf(randomIndex) >= 0);

    //console.log(this.state.viewedQuotes.indexOf(randomIndex));

    let viewedQuotesArr = [...this.state.viewedQuotes, randomIndex];

    // If we've gone through every quote, forget which quotes we've seen
    if (viewedQuotesArr.length === this.state.lyrics.length) {
      viewedQuotesArr = [];
    }
    //console.log(viewedQuotesArr);

    // Set new quote data
    this.setState({
      quoteIndex: randomIndex,
      viewedQuotes: viewedQuotesArr,
      text: this.state.lyrics[randomIndex].lyric,
      author: this.state.lyrics[randomIndex].author,
      songName: this.state.lyrics[randomIndex].songName,
      album: this.state.lyrics[randomIndex].album,
    });
  }

  changeBackground = () => {
    let randomIndex = -1;

    // Get index of a quote not equal to current color
    do {
      randomIndex = Math.floor((Math.random() * this.state.bgColors.length));
    } while (randomIndex === this.state.bgIndex ||
      this.state.bgViewed.indexOf(randomIndex) >= 0);

    let bgViewedArr = [...this.state.bgViewed, randomIndex];
    // console.log(bgViewedArr);

     // If we've gone through every quote, forget which quotes we've seen
     if (bgViewedArr.length === this.state.bgColors.length) {
      //console.log("reset colors viewed");
      bgViewedArr = [];
    }

    let colorToSet = this.state.bgColors[randomIndex];
    //console.log(colorToSet);

    this.setState({
      currentColor: colorToSet,
      bgIndex: randomIndex,
      bgViewed: bgViewedArr      
    });
  }

  // Render
  render() {
    return (
      <div id="wrapper">

        <div id="top-stripes">
          <div id="stripe-1" className="top-stripe"></div>
          <div id="stripe-2" className="top-stripe"></div>
          <div id="stripe-3" className="top-stripe"></div>
          <div id="stripe-4" className="top-stripe" ></div>
        </div>

        <div id="quote-box">

          <div id="page-title">
            <p id="author">Lyrics by {this.state.author}</p>
          </div>

          {/* text == lyric */}
          <div id="lyric-section">
            <p id="text">{this.state.text}</p>
          </div>

          <div id="horizontal-bar" className={this.state.currentColor}></div>

          <div id="song-details-section">
            <p id="songName">{this.state.songName}</p>
            <p id="album">{this.state.album}</p>
          </div>

          {/* Share + new lyric */}
          <div id="box-buttons">

            <button>
              <a id="tweet-quote" className="button" href="twitter.com/intent/">
                <FontAwesomeIcon id="tweet-icon" icon={faTwitter} />
              </a>
            </button>

            <button id="new-quote" onClick={this.newQuote}>
              New Lyric
            </button>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
