import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-lists/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState({ monsters: users })
      );
  }

  constructor() {
    super();
    this.state = {
      varValue: 'Hello Mr. World',

      monsters: [],
      searchField: ''

    };
  }

  handleChange=(e)=>{
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(
      searchField.toLowerCase()
    ));

    return (
      <div className="App">
	<h1>Moster Search</h1>
         <SearchBox 
          placeholder="Search monster"
          handleChange={this.handleChange}
        />
        <CardList monster={filteredMonsters} />
      </div>
    );
  }
}
export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


