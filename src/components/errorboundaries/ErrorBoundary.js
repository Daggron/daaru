import React, { Component } from 'react';

export default class ErrorBoundary extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             hasError : false
        }
    }

    static getDerivedStateFromError(error){
        console.log(error);
        return { hasError: true}
    }

    render(){
        if(this.state.hasError){
            return <p>Oops an unknown error occured</p>
        }
        return this.props.children

    }
    
}