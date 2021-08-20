// import Person from './components/Person';
// import Dog from './components/Dog';
// import Goldfish from './components/Goldfish';
import Pets from './components/Pets';
import './App.css';

// ===============================================

function App() {
  const petsArray = [
    {
      petName: 'Milo',
      animalType: 'dog'
    },
    {
      petName: 'Layla',
      animalType: 'goldfish'
    },
    {
      petName: 'Simon',
      animalType: 'cat'
    }
  ];

  return (
    <div className="App">
      <Pets petsArray={petsArray} />
    </div>
  );
}

export default App;

























// ===============================================

// 2. Practice Passing an Array as a Props to a Component
// function App() {
//   const favPlaces = [
//     'the park',
//     'the couch',
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
