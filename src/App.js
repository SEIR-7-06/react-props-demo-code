import Person from './components/Person';
// import Dog from './components/Dog';
// import Goldfish from './components/Goldfish';
import './App.css';

// ===============================================

// 1. Practice Passing Multiple Props to a Component (strings, numbers, and booleans)
function App() {
  return (
    <div className="App">
      <Person
        personName="Herbert"
        favColor="Grey"
        occupation="Accountant"
        hometown="San Diego, CA"
        numOfPets={1}
        isMorningPerson={true}
      />
    </div>
  );
}

export default App;

// ===============================================

// 2. Practice Passing an Array as a Props to a Component
// function App() {
//   const favPlaces = [
//     'the park',
//     'the coach',
//     'the beach'
//   ]

//   return (
//     <div className="App">
//       <Dog dogName="Milo" favPlaces={favPlaces} />
//     </div>
//   )
// }

// export default App;

// ================================================================

// 3. Passing an Object as a Prop to a Component
// function App() {
//   const goldfishStats = {
//     checkers: 1,
//     chess: 3
//   }

//   return (
//     <div className="App">
//       <Goldfish goldfishStats={goldfishStats} />
//     </div>
//   );
// }

// export default App;
