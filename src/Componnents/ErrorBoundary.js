import React, { Component } from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            changeinerror: false
        }
        
    }
    componentDidCatch(error,info){
        this.setState({changeinerror:true});
    }
    render()
    {
        if(this.state.changeinerror){
            return <h1>opps there is an error try to refresh</h1>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;