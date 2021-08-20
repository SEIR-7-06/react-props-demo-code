/*
[
<div>
  <h2>Milo</h2>
  <p>Animal type: dog</p>
</div>

<div>
  <h2>Milo</h2>
  <p>Animal type: dog</p>
</div>

<div>
  <h2>Milo</h2>
  <p>Animal type: dog</p>
</div>
]
*/


function Pets(props) {

  let petsJSX = [];

  for (let i = 0; i < props.petsArray.length; i++) {
    console.log(props.petsArray[i]);

    const petName = props.petsArray[i].petName;
    const animalType = props.petsArray[i].animalType;

    petsJSX.push(
      <div>
        <h2>{petName}</h2>
        <p>{petName} is a {animalType}</p>
      </div>
    );
  }

  return (
    <>
      <h2>These are all my Pets</h2>
      {petsJSX}
    </>
  )
}

export default Pets;