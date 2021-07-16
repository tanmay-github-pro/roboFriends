import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }
    onSearchChange = (event) => {
        this.setState( {searchField: event.target.value} )
        
    }
    render() {
        const filteredRobots = this.state.robots.filter (
            robotTobeReturned => {
            return robotTobeReturned.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className = 'tc'>
                <h1>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots = {filteredRobots}/>
            </div>
        );
    }
}

export default App;