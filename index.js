let nomesPokemon = [
  ["poochyena", "M", 2],
  ["zigzagoon", "F", 2],
  ["dragonite", "M", 5],
  ["dragonite", "F", 5],
  ["dragonite", "F", 5],
  ["poochyena", "F", 3],
  ["wurmple", "M", 2],
  ["wurmple", "F", 2],
];
const msg = " foi cadastrado com sucesso!";

console.log(
  "O pokemon " +
    nomesPokemon[0][0] +
    " do sexo " +
    nomesPokemon[0][1] +
    " que está no nível " +
    nomesPokemon[0][2] +
    msg
);

console.log(
  "O pokemon " +
    nomesPokemon[1][0] +
    " do sexo " +
    nomesPokemon[1][1] +
    " que está no nível " +
    nomesPokemon[1][2] +
    msg
);
