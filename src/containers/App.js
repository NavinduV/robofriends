import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response=> response.json())
		.then(users=> this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		const {robots, searchfield} = this.state;
		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (robots.length===0) {
			return <p className="more"> Wait sometime... </p> 
		} else {	
			return (
				<div className='tc'>	
					<h1>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filterRobots}/>
					</Scroll>
				</div>	
			);
		}
	}
}

export default App;

// +we can use this also if there is not any robota to display :-

// change this syntax to:- 
// if (robots.length===0) {
// 	return <p className="more"> Wait sometime... </p> 
// } else {	
// 	return (
// 		<div className='tc'>	
// 			<h1>RoboFriends</h1>
// 			<SearchBox searchChange={this.onSearchChange} />
// 			<Scroll>
// 				<CardList robots={filterRobots}/>
// 			</Scroll>
// 			</div>	
// 		);

// this:-
// return !robots.length ?
// 	<p className="more"> Wait sometime... </p> :
// (
// 	<div className='tc'>	
// 					<h1>RoboFriends</h1>
// 					<SearchBox searchChange={this.onSearchChange} />
// 					<Scroll>
// 						<CardList robots={filterRobots}/>
// 					</Scroll>
// 				</div>	
// );
