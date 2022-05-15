
import { useEffect, useState } from 'react';


const LifecycleFunc = ({ text, color }) => {
    const [flag, setFlag] = useState('win');
   
    const toggleFlag = () => {
        setFlag(flag === 'win' ? 'lose' : 'win')
    }

    useEffect(() => {
        console.log("useEffect(), empty Array passed, when component added in DOM - replace componentDidMount()");
    }, [])

    useEffect(() => {
        console.log("useEffect(), nothing passed, When component recieves new state or props - replace componentDidUpdate()");
    })
  
    useEffect((text) => {
        console.log("useEffect(), prop ref passed, When value of prop changes - replace componentDidUpdate(prevProps)");
    }, [text])

    useEffect(() => {
        return () => {
            console.log("useEffect() {return () => {}, []) - when return function, pass in empty array - replace componentDidUnmount()" );
        }
    }, [])

    return (
    <div>
        <h2>Lifecycle - Function</h2>
        <p style={{ color: color }}>Text (prop): {text}</p>
        <p style={{ color: color }}>Flag (state): {flag}</p>
        <button onClick={toggleFlag}>Toggle</button>

    </div>
  )
}

export default LifecycleFunc