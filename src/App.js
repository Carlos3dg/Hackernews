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
  constructor(props) {
    //It is mandatory to call super(props) to can access to any property in the constructore, in this case this.sate
    super(props);
    //Local componenet state
    this.state = {
      list, //Now the list is part of the component
    };
    //To declare a method inside the class we need to bind it to the constructor
    this.onDismiss = this.onDismiss.bind(this); 
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId); //Filter returns a new array dependind of the evaluating function that has as an input
    this.setState({list: updatedList}); //This method set a new state instead of updating the old one.
  }

  render() {
    return (
      <div className="App">
        {
          this.state.list.map(list => 
              <div key={list.objectID}>
                <span>
                  <a href={list.url}>{list.title}</a>
                </span>
                <span>{list.author}</span>
                <span>{list.num_comments}</span>
                <span>{list.points}</span>
                <span>
                  <button
                    onClick={() => this.onDismiss(list.objectID)}
                    type="button"
                  >
                    Dismiss
                  </button>
                </span>
              </div>)
        }
      </div>
    ); //The return value is the element (HTML), one more thing, to set a variable in JSX we use curly braces
  }
}//

//ES6 Object Initializer
//const name = 'Robin';
//Example 1
/*
const user = {
  name: name
}
*/

//Example 2. When the property name and the property value are named equal we can use this:
/*
const user = {
  name,
};
*/
//Example 3. Computed property names
//This are properties named as a vlue variable, to get this we need to write the name variable inside brackets
const key = 'name';

const user = {
  [key]: 'Robin', //Here the property is called name
  lastName: 'Lopez'
}
console.log(user); // user {name: Robin, lastName:Lopez}
console.log(user.name); //'Robin

export default App;
