import React, { Component } from 'react';

import Cardlist from '../components/Cardlist';
import ErrorAlert from '../components/ErrorAlert';
import Loading from '../components/Loading';
import SearchBox from '../components/Searchbox';
import api from '../utils/api.utils';
import './App.css';

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
    api
      .getUsers()
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

    let AlertMessage = null;
    if (error) AlertMessage = ErrorAlert;
    if (loading) AlertMessage = Loading;

    return (
      <div className="tc">
        {AlertMessage && (
          <div role="alert" className="alert-container">
            <AlertMessage />
          </div>
        )}
        {!AlertMessage && (
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
