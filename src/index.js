import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import Stories from './Stories/Stories';
import Feed from './Feed/Feed';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Stories />
      <Feed />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);