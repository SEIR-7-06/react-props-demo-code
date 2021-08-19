import logo from './logo.svg';
import Person from './components/Person';
import Dog from './components/Dog';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person />
      <Person />
      <Person />

      <Dog />
    </div>
  );
}

export default App;

// Activity
// - Create a Person component
// - Import the Person component into App.js
// - Render the Person component in our App component