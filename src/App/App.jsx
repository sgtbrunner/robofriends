import React, { Component } from 'react';

import Cardlist from '../components/Cardlist/cardlist.component';
import ErrorBoundary from '../components/Error/error-boundary.component';
import Loading from '../components/Loading/loading.component';
import SearchBox from '../components/Searchbox/searchbox.component';
import Scroll from '../components/Scroll/scroll.component';
import './App.css';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      loading: false,
      robots: [],
      searchField: '',
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(USERS_URL)
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
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
    const { error, loading } = this.state;
    const { filterRobots, onSearchChange } = this;

    return (
      <div className="tc">
        {(loading || error) && (
          <div className="message-container">
            { loading && <Loading /> }
            { error && <ErrorBoundary /> }
          </div>
        )}
        { !error && !loading && (
          <div>
            <h1 className="t1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
              <Cardlist robots={filterRobots()} />
            </Scroll>
          </div>
        )}
      </div>
    );
  }
}

export default App;
