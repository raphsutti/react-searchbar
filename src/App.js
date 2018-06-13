import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const list = [
  {
    title: 'Harry Potter',
    url: 'https://dobbyisfree.io/fun',
    author: 'J K Rowling',
    objectID: 0,
  },
  {
    title: 'Nineteen Eighty Four',
    url: 'https://bigbrother.io/fun',
    author: 'George Orwell',
    objectID: 1,
  },
  {
    title: 'The Hobbit',
    url: 'https://myprecious.io/fun',
    author: 'J R R Tolkein',
    objectID: 2,
  },
  {
    title: 'The Chronicles of Narnia',
    url: 'https://lionking.io/fun',
    author: 'C S Lewis',
    objectID: 3,
  },
]

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      list: list,
      searchTerm: '',
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !==id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Search bar</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <form>
          <input onChange={this.onSearchChange} type="text" placeholder="Type in your search"/>
        </form>
        <p>
          {this.state.list.filter(isSearched(this.state.searchTerm)).map(item => 
            <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>
              <button onClick={() => this.onDismiss(item.objectID)} type="button">Dismiss</button>
            </span>
            </div>
          )}
        </p>
      </div>
    );
  }
}

export default App;
