import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        this.setState( {robots: robots} )
    }

    /* use arrow func as good practice when using custom methods
    else it throws some weird errors
    LOOk into this! */
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
                <h1><strong>Robot Friends</strong></h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots = {filteredRobots}/>
            </div>
        );
    }
}

export default App;