(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(27)},20:function(e,t,a){},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(6),r=a.n(o),s=(a(20),a(12)),c=a(7),l=a(8),d=a(13),u=a(9),m=a(3),h=a(14),w=(a(21),a(10)),v=a(11),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).getNewQuote=function(){var e=-1;do{e=Math.floor(Math.random()*a.state.lyrics.length)}while(e===a.state.quoteIndex||a.state.viewedQuotes.indexOf(e)>=0);var t=[].concat(Object(s.a)(a.state.viewedQuotes),[e]);t.length===a.state.lyrics.length&&(t=[]),a.setState({quoteIndex:e,viewedQuotes:t,text:a.state.lyrics[e].lyric,author:a.state.lyrics[e].author,songName:a.state.lyrics[e].songName,album:a.state.lyrics[e].album})},a.changeBackground=function(){var e=-1;do{e=Math.floor(4*Math.random())}while(e===a.state.quoteIndex||a.state.viewedQuotes.indexOf(e)>=0)},a.state={lyrics:null,quoteIndex:-1,viewedQuotes:[],text:"",author:"",songName:"",album:"",stripeColor:"",colorIndex:-1,viewedColors:[]},a.newQuote=a.newQuote.bind(Object(m.a)(a)),a.shareOnTwitter=a.shareOnTwitter.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.title="Frank Ocean Lyrics",fetch("https://gist.githubusercontent.com/MDBoticano/d88c9ddd0eedd5d3223ff7b5bc5f0090/raw/de541631b9e409c39e8d835098c6bb01ec1f20c3/lyrics.json").then(function(e){return e.json()}).then(function(t){var a=Math.floor(Math.random()*t.lyrics.length);Math.floor(4*Math.random());e.setState({lyrics:t.lyrics,quoteIndex:a,viewedQuotes:[a],text:t.lyrics[a].lyric,author:t.lyrics[a].author,songName:t.lyrics[a].songName,album:t.lyrics[a].album})}).catch(function(t){return e.setState({error:t})})}},{key:"newQuote",value:function(){this.getNewQuote(),this.changeBackground()}},{key:"shareOnTwitter",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{id:"wrapper"},i.a.createElement("div",{id:"top-stripes"},i.a.createElement("div",{id:"stripe-1",className:"top-stripe"}),i.a.createElement("div",{id:"stripe-2",className:"top-stripe"}),i.a.createElement("div",{id:"stripe-3",className:"top-stripe"}),i.a.createElement("div",{id:"stripe-4",className:"top-stripe"})),i.a.createElement("div",{id:"quote-box"},i.a.createElement("div",{id:"page-title"},i.a.createElement("p",{id:"author"},"Lyrics by ",this.state.author)),i.a.createElement("div",{id:"lyric-section"},i.a.createElement("p",{id:"text"},this.state.text)),i.a.createElement("div",{id:"horizontal-bar",className:this.state.stripeColor}),i.a.createElement("div",{id:"song-details-section"},i.a.createElement("p",{id:"songName"},this.state.songName),i.a.createElement("p",{id:"album"},this.state.album)),i.a.createElement("div",{id:"box-buttons"},i.a.createElement("button",null,i.a.createElement("a",{id:"tweet-quote",className:"button",href:"twitter.com/intent/"},i.a.createElement(w.a,{id:"tweet-icon",icon:v.a}))),i.a.createElement("button",{id:"new-quote",onClick:this.newQuote},"New Lyric"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.1388b450.chunk.js.map