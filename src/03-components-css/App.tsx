import './App.css';

import React from 'react';

import MyComponent from './MyComponent';

// https://reactjs.org/docs/faq-styling.html

/**
 * Exercise
 * Style both elements accordingly via App.css
 */

class App extends React.Component {

  public render() {

    return (
      <div>
        <p>
          Make this text uppercase
        </p>
        <MyComponent>
          mAke tHIs Text Lowercase
        </MyComponent>
      </div>
    );
  }
}

export default App;
