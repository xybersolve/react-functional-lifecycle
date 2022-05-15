
import './App.css';
import ErrorBoundry from './components/ErrorBoundry';
import './components/LifecycleClass';
import LifecycleClass from './components/LifecycleClass';
import LifecycleFunc from './components/LifecycleFunc';

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <LifecycleClass text="a class act" color="blue"/>
        <LifecycleFunc text="functions rule the day" color="violet" />
      </ErrorBoundry>
    </div>
  );
}

export default App;
