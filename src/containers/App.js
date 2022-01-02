import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import './App.css';
import Search from '../components/Search';

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
            .then(users => this.setState({ robots: users }))
    }

    /* use arrow func as good practice when using custom methods
    else it throws some weird errors
    LOOk into this! */
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })

    }
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(
            robottobefiltered => {
                return robottobefiltered.name.toLowerCase()
                    .includes(searchField.toLowerCase());
            })
        return (
            <div className='tc'>
                <header className='App-header'>
                    <h1 className='header-item' style={{color: 'black', padding: '0rem 1.5rem'}}>Robo Friends</h1>
                    <Search className='header-item' searchChange={this.onSearchChange} />
                </header>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

export default App;