let palavra; 

function setup() {//configurações das palavras
  createCanvas(400, 400); //criar tela

  palavra = palavraAleatoria(); //palara aleatoria
}

function palavraAleatoria() { //configuração palavra
  let palavras = ["Isabella", "Helena", "Rachwal"]; //palavras escolhidas
  return random(palavras); //palavras aleatorias retornam
}

function inicializaCores()  //configurações das cores
  background("lightgreen"); //fundo verde
  fill("black"); //cor da palavra, preta
  textSize(64); //tamanho da palavra
  textAlign(CENTER, CENTER); // alinhar palavra no centro
}

function draw() { 
  inicializaCores();

  let maximo = width;
  let minimo = 0;
  // mouseX, 0, width ==> 0, palavra.length //comprimento da palavra

  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
}
