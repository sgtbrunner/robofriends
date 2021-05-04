import React, { Component } from 'react';

import Cardlist from '../components/Cardlist/cardlist.component';
import ErrorAlert from '../components/ErrorAlert/error-alert.component';
import Loading from '../components/Loading/loading.component';
import SearchBox from '../components/Searchbox/searchbox.component';
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
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('Something went wrong');
      })
      .then((users) => this.setState({ robots: users }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  _filterRobots = () =>
    this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

  _onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { error, loading } = this.state;
    const { _filterRobots, _onSearchChange } = this;

    let WarnMessageComponent = null;
    if (error) WarnMessageComponent = ErrorAlert;
    if (loading) WarnMessageComponent = Loading;

    return (
      <div className="tc">
        {WarnMessageComponent && (
          <div className="warn-container">
            <WarnMessageComponent />
          </div>
        )}
        {!error && !loading && (
          <div>
            <h1 className="t1">RoboFriends</h1>
            <SearchBox searchChange={_onSearchChange} />
            <div className="pv4">
              <Cardlist robots={_filterRobots()} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
