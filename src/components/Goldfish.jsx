function Goldfish(props) {

  const checkers = props.goldfishStats.checkers;
  const chess = props.goldfishStats.chess;

  return (
    <div>
      <h2>My Goldfish Stats</h2>
      <p>Checkers Record: {checkers}</p>
      <p>Chess Record: {chess}</p>
    </div>
  )
}

export default Goldfish;

/*
Inside the Goldfish component props is simply an object that looks like this.

const props = {
  goldfishStats: { checkers: 1, chess: 3 }
}

*/