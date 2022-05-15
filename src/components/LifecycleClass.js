import React, { Component } from 'react'

export class LifecycleClass extends Component {
  
    componentDidMount() {
      console.log('LC Class: componentDidMount()');
    }  
  
    shouldComponentUpdate(nextProps) {
       console.log('LC Class: shouldComponentUpdate()');
       console.log('nextProps: ', nextProps);
       return true;
    }

    componentDidUpdate() {
       console.log('LC Class: componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('LC Class: componentWillUnmount()');
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }
    constructor(props) {
        super(props);
        this.state = {flag: 'win'};
        this.toggleFlag = this.toggleFlag.bind(this);
    }  
  
    toggleFlag() {
        this.setState((prevState) => {
            return this.state.flag === "win" ? {flag: "lose"} : {flag: "win"}
        });
    }

    forceToggle() {
        this.forceUpdate();
    }



    render() {
        return (
            <div>
                <h2>Lifecycle - Class</h2>
                <p style={{ color: this.props.color }}>Text (prop): {this.props.text}</p>
                <p style={{ color: this.props.color }}>Flag (state): {this.state.flag}</p>
                <button onClick={this.toggleFlag}>Toggle</button>
            </div>
        )
    }
}

export default LifecycleClass