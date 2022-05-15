
import React, { Component } from 'react'



export class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }
    static getDerivedStateFromError(error) {
        return {hasError: true };
    }
    componentDidCatch(err, errInfo) {
        console.log(err, errInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went worng!</h1>
        }
        return (
            <div style={{ border: "1px solid green", padding: '10px' }}>
                {this.props.children}
            </div>
        );    
    }
}

export default ErrorBoundry