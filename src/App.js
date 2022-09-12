import React from "react";
import "./App.css";
import { useEffect, useState } from "react";

const quotesBank = [
  {
    text: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    author: "Albert Einstein",
  },
  {
    text: "Learn as if you will live forever, live like you will die tomorrow.",
    author: "Mahatma Gandhi",
  },
  {
    text: "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "When you change your thoughts, remember to also change your world.",
    author: "Norman Vincent Peale",
  },
  {
    text: "War does not determine who is right - only who is left.",
    author: "Bertrand Russel",
  },
];

const QuoteBox = ({ quote, handleNewQuote }) => {
  return (
    <div id="quote-box">
      <h2 id="text">
        <i className="fa fa-quote-right"></i>
        {quote.text}
      </h2>
      <h6 id="author">{quote.author}</h6>
      <div className="actions">
        <a id="tweet-quote" href="twitter.com/intent/tweet">
          <i class="fa fa-twitter-square" aria-hidden="true"></i>
        </a>
        <button id="new-quote" target="_blank" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

const getRandomQuote = () =>
  Math.round(Math.random() * (quotesBank.length - 1));

const App = () => {
  const [quote, setQuote] = React.useState(quotesBank[getRandomQuote()]);

  const handleNewQuote = () => {
    setQuote(quotesBank[getRandomQuote()]);
  };

  return (
    <div className="App">
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  );
};

export default App;
