const vinhos = [
    {nome: "Vinho Arinto", tipo: "branco", safra: 2021, estoque: 5},
    {nome: "Merlot", tipo: "tinto", safra: 2012, estoque: 10},
    {nome: "Malbec", tipo: "tinto", safra: 2017, estoque: 3},
    {nome: "Lisbonita Rose", tipo: "rose", safra: 2022, estoque: 8}
];

function adicionarVinho(nome, tipo, safra, estoque) {
  vinhos.push({ nome, tipo, safra, estoque });
}

function listarVinhos() {
  console.log("🍷 Lista de vinhos:");
  vinhos.forEach((vinho, index) => {
    console.log(`${index + 1}. ${vinho.nome} (${vinho.tipo}, ${vinho.safra}) - Estoque: ${vinho.estoque}`);
  });
}

function estoqueBaixo() {
  return vinhos.filter(v => v.estoque < 5);
}

function estoqueTotal() {
  return vinhos.reduce((total, v) => total + v.estoque, 0);
}

function nomesCaixaAlta() {
  return vinhos.map(v => v.nome.toUpperCase());
}