import React, { Component } from 'react';
import './App.css';

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
      album: ''
    };
    // Bind functions to this
    this.newQuote = this.newQuote.bind(this);
    this.shareOnTwitter = this.shareOnTwitter.bind(this);
  }


  componentWillMount() {
    // Get JSON from gist
    fetch('https://gist.githubusercontent.com/MDBoticano/d88c9ddd0eedd5d3223ff7b5bc5f0090/raw/d90344093909f16a86cc999efa76e0df97d0547f/lyrics.json')

      .then(response => response.json()) // parses data as json
      .then((data) => {

        // Generate a random index to set initial state
        let randomIndex = Math.floor((Math.random() * data.lyrics.length));

        this.setState({
          lyrics: data.lyrics,
          quoteIndex: randomIndex,
          viewedQuotes: [randomIndex],
          text: data.lyrics[randomIndex].lyric,
          author: data.lyrics[randomIndex].author,
          songName: data.lyrics[randomIndex].songName,
          album: data.lyrics[randomIndex].album,
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

    //console.log("clicked");




    // Get index of a quote not equal to current quote
    do {
      randomIndex = Math.floor((Math.random() * this.state.lyrics.length));
    }
    // Keep looking if it's the same index as our current quote or if the randomized index exists in our viewedQuotes array
    while (randomIndex === this.state.quoteIndex ||
      this.state.viewedQuotes.indexOf(randomIndex) >= 0);

    console.log(this.state.viewedQuotes.indexOf(randomIndex));

    let viewedQuotesArr = [...this.state.viewedQuotes, randomIndex];

    // If we've gone through every quote, forget which quotes we've seen
    if (viewedQuotesArr.length === this.state.lyrics.length) {

      viewedQuotesArr = [];

      //console.log('reset viewed quotes');
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

  }

  // Render
  render() {
    return (
      <div id="wrapper">
        <div id="quote-box">

          {/* Share + new lyric */}
          <div id="box-buttons">
            <button id="new-quote" onClick={this.newQuote}>
              New Lyric
            </button>
          </div>

          {/* text == lyric */}
          <h2 id="text">{this.state.text}</h2>
          <p id="songName">{this.state.songName}</p>
          <p id="album">{this.state.album}</p>
          <p id="author">{this.state.author}</p>

        </div>
      </div>
    );
  }
}

export default App;
