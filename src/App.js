import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import FunctionalCounter from './components/FunctionalCounter';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      {/* <Profile name="Emmanuel" lastname="Akanni"/> */}
      {/* <Message messageCode="10" messageContent="This is a message from props"></Message> */}
      {/* <Resume name="Akanni"></Resume> */}
      {/* <FunctionEvent></FunctionEvent> */}
      <FunctionalCounter></FunctionalCounter>
    </div>
  );
}

export default App;
