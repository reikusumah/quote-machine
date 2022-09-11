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
      <h2 id="text">{quote.text}</h2>
      <h4 id="author">{quote.author}</h4>

      <div className="actions">
        <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
          Twitter
        </a>
        <button className="button" id="new-quote" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

// const getRandomQuote = () => {
//   Math.round(Math.random() * (quotesBank.length - 1 - 0) + 0);
// };

// const App = () => {
//   // const [quote, setQuote] = React.useState(quotesBank[getRandomQuote()]);
//   const [quote, setQuote] = React.useState(quotesBank[getRandomQuote()]);
//   const handleNewQuote = () => {
//     setQuote(quotesBank[getRandomQuote()]);
//   };

//   return (
//     <div className="App">
//       <QuoteBox handleNewQuote={handleNewQuote} quote={quote} />
//     </div>
//   );
// };

const getRandomIndex = () => {
  return Math.round(Math.random() * (quotesBank.length - 1 - 0) + 0);
};

// const App = () => {
//   const [quote, setQuote] = React.useState(quoteData[getRandomIndex()]);

//   const handleNewQuote = () => {
//     setQuote(quoteData[getRandomIndex()]);
//   };

//   return (
//     <div class="main">
//       <QuoteBox handleNewQuote={handleNewQuote} quote={quote} />
//     </div>
//   );
// };
// const getRandomIndex = () => {
//   Math.round(Math.random() * (quoteData.length - 1 - 0) + 0);
// };

const App = () => {
  const [quote, setQuote] = React.useState(quotesBank[getRandomIndex()]);

  const handleNewQuote = () => {
    setQuote(quotesBank[getRandomIndex()]);
  };

  return (
    <div className="main">
      <QuoteBox handleNewQuote={handleNewQuote} quote={quote} />
    </div>
  );
};

export default App;
