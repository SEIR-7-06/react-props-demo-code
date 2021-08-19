function Person(props) {
  if (props.isMorningPerson) {
    console.log('Good morning!');
  }

  return (
    <div>
      <h2>Name: {props.personName}</h2>
      <p>Favorite Color: {props.favColor}</p>
      <p>Occupation: {props.occupation}</p>
      <p>Hometown: {props.hometown}</p>
      <p>Number of Pets: {props.numOfPets}</p>
    </div>
  )
}

export default Person;

/*
Inside the Person component props is simply an object that looks like this.

props = {
  personName: "Herbert",
  favColor: "Grey",
  occupation: "Accountant",
  hometown: "San Diego, CA"
}
*/
