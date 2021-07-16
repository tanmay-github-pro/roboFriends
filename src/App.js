import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
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
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState( {robots: users} ))   
    }

    /* use arrow func as good practice when using custom methods
    else it throws some weird errors
    LOOk into this! */
    onSearchChange = (event) => {
        this.setState( {searchField: event.target.value} )
        
    }
    render() {
        const filteredRobots = this.state.robots.filter (
            robots => {
            return robots.name.toLowerCase()
                    .includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className = 'tc'>
                <h1><strong>Robot Friends</strong></h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;