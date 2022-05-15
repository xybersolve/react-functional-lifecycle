# React Lifecycle - Functional vs. Class Based

A brief self documented extrapolation on React lifecycles for functional components in comparison with class based components.

## Lifecycle (functional components)

### Mount 
- useEffect(() => {}, []) - componentDidMount() (when component mounts) 
	

### Update
- useEffect(() => {}) - componentDidUpdate (when props or state changes)
- useEffect(() => {}, [var]) - componentDidUpdate / shouldComponentUpdate - (when specific prop pr state changes)

### Unmount
- useEffect(() => { return () => { }}, [] }) - componentDidUnmount


## useEffect parameters imply functionality
- useEffect(() => {}, []) - componentDidMount() - only when component mounts
- useEffect(() => {}) - componentDidUpdate() - when any prop or state changes
- useEffect(() => {}, [prop, state]) - when specific prop or state changes
- useEffect(()=> { return () =>{}}, []) - only when component unmounts

