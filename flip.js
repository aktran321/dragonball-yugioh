function Zfighter(
  name,
  powerLevel,
  defenseLevel,
  ssj,
  health,
  phrase,
  specialMove
) {
  this.name = name;
  this.powerLevel = powerLevel;
  this.defenseLevel = defenseLevel;
  this.ssj = ssj;
  this.health = health;
  this.phrase = phrase;
  this.specialMove = specialMove;
  this.attack = function() {
    console.log(phrase + specialMove);
  };
}

var Goku = new Zfighter(
  "Goku",
  9999,
  3000,
  true,
  11000,
  "AHHHHHHHHH ",
  "KaaMEEEHAAAAAMEEEEEEEHAAAAAHAHAHHAAAAAAAAA"
);
var Vegeta = new Zfighter(
  "Vegeta",
  8000,
  4000,
  true,
  11000,
  "I AM THE PRINCE OF ALL SAIYANS! TAKE THIS ",
  "BIG BANGGG ATTACKKKKKKK"
);
var Trunks = new Zfighter(
  "Trunks",
  7000,
  5000,
  true,
  11000,
  "ILL SEND YOU BACK TO THE FUTURE EAT THIS",
  "BURNINGG ATTACKKKK"
);
var Gohan = new Zfighter(
  "Gohan",
  20000,
  20000,
  true,
  20000,
  "I dont't want to do this, but now I have no choice",
  "KAHHHHHH--MEEEEEE----HAAAAAAA---MEEEEE........HHHHHAAAAAAAAAAAAAAAAA"
);
var Yamcha = new Zfighter(
  "Gohan",
  20000,
  20000,
  true,
  20000,
  "I dont't want to do this, but now I have no choice",
  "KAHHHHHH--MEEEEEE----HAAAAAAA---MEEEEE........HHHHHAAAAAAAAAAAAAAAAA"
);

Gohan.attack();
Vegeta.attack();
Goku.attack();
