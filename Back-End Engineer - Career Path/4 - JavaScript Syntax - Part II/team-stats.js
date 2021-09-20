const team = {
  _players: [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 36,
    },
    {
      firstName: 'Smith',
      lastName: 'Bob',
      age: 40,
    },
    {
      firstName: 'Taylor',
      lastName: 'Durden',
      age: 45,
    },
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 25,
      opponentPoints: 34,
    },
    {
      opponent: 'Cowboys',
      teamPoints: 33,
      opponentPoints: 34,
    },
    {
      opponent: 'Beverly',
      teamPoints: 10,
      opponentPoints: 1,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age,
    };

    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints,
    };

    this._games.push(game);
  },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Miami', 20, 10);
team.addGame('Police', 5, 1);
team.addGame('Crips', 20, 10);

console.log(team.games);
