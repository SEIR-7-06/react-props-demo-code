function Dog(props) {
  return (
    <div>
      <h2>Name: {props.dogName}</h2>
      <h3>Favorite Places:</h3>
      <ul>
        <li>{props.favPlaces[0]}</li>
        <li>{props.favPlaces[1]}</li>
        <li>{props.favPlaces[2]}</li>
      </ul>
    </div>
  );
}

export default Dog;

/*
Inside the Dog component props is simply an object that looks like this.

const props = {
  dogName: 'Milo',
  favPlaces: ['the park', 'the coach', 'the beach']
}
*/