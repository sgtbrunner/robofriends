import React, { Component } from 'react';
import Cardlist from '../components/Cardlist/cardlist.component';
import SearchBox from '../components/Searchbox/searchbox.component';
import Scroll from '../components/Scroll/scroll.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  filterRobots = () => {
    return this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
  };

  render() {
    if (!this.state.robots.length) {
      return <h1 className="tc f1">Loading...</h1>;
    }
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <Cardlist robots={this.filterRobots()} />
        </Scroll>
      </div>
    );
  }
}

export default App;
