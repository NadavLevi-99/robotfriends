import React, { Component } from 'react';
import { robots } from '../containers/robots';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox.js';
import ErrorBoundary from './ErrorBoundary';

class App extends Component
{
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
        

    }
    
    onSearchChange = (event) => {
        // console.log(event);
         this.setState({searchfield: event.target.value })
      }
    componentDidMount(){
        
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <ErrorBoundary>
                <Cardlist robots={filteredRobots}/>
                </ErrorBoundary>
            </div>
        );
    }
};
export default App;