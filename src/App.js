import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//No we will redered a list of items:
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abrmov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]


//The class is the component
class App extends Component {
  render() {
    var helloWorld = 'Welcome to the Road to learn React.'
    return (
      <div className="App">
        {
          list.map(function(list) {
            return (
              <div key={list.objectID}>
                <span>
                  <a href={list.url}>{list.title}</a>
                </span>
                <span>{list.author}</span>
                <span>{list.num_comments}</span>
                <span>{list.points}</span>
              </div>
            );
          })
        }
      </div>
    ); //The return value is the element (HTML), one more thing, to set a variable in JSX we use curly braces
  }
}//

export default App;
