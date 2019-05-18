import React, {Component} from 'react';
import Cardlist from '../components/cardlist';
import SearchBox from '../components/searchbox';
import Scroll from '../components/scroll'
import './App.css';

class App extends Component {
	// STATE DECLARATION
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	// componentDidMount() IS A LIFECYCLE HOOK THAT RUNS ONCE THE APP COMPONENT IS MOUNTED IN INDEX.HTML.
	// IN THIS CASE, IT FETCHES THE USERS FROM THE SERVER DATABASE, CONVERTS THE RESPONSE TO JSON AND 
	// UPDATES THIS.STATE.ROBOTS WITH THE USERS FETCHED
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}
	// TRIGGERED EVERY TIME THE SEARCHBOX CHANGES
	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}
	// RENDER TO INDEX.HTML
	render() {
		const filteredRobots = this.state.robots.filter((robot) => {
		// Needs .toLowerCase() on both sides of the declaration to compare input to user.name on the same level
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()); 
		})
	    	if (!this.state.robots.length) {
	    		return <h1 className="tc f1">Loading...</h1> 
	    	} else {
	      		return (
	      			<div className="tc ">
	      	        	<h1 className="f2">RoboFriends</h1>
	      	        	<SearchBox searchChange={this.onSearchChange}/>
	      	        	<Scroll>
	      	        		<Cardlist robots={filteredRobots}/>
	      	        	</Scroll>
	      	      	</div>
	      	    )
	    	}
	}
}

export default App;
