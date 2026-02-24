function calcularMedia() {
  // Capturando os elementos HTML
  let n1Input = document.getElementById("nota1");
  let n2Input = document.getElementById("nota2");
  let n3Input = document.getElementById("nota3");
  let n4Input = document.getElementById("nota4");
  let btn = document.querySelector("button");
  let resultado = document.getElementById("resultado");

  // 1º Passo: Se o botão estiver como "Limpar", a gente reseta a calculadora
  if (btn.innerText === "Limpar") {
    n1Input.value = "";
    n2Input.value = "";
    n3Input.value = "";
    n4Input.value = "";

    // Desbloqueia os campos para o usuário digitar de novo
    n1Input.disabled = false;
    n2Input.disabled = false;
    n3Input.disabled = false;
    n4Input.disabled = false;

    // Limpa o resultado visual
    resultado.innerText = "";
    resultado.classList.remove("aprovado", "reprovado");

    // Volta o botão para "Calcular"
    btn.innerText = "Calcular";
    return; // Esse 'return' faz a função parar aqui para não tentar calcular o vazio
  }

  // 2º Passo: Lógica normal de Calcular
  let n1 = Number(n1Input.value);
  let n2 = Number(n2Input.value);
  let n3 = Number(n3Input.value);
  let n4 = Number(n4Input.value);
  
  let notas = [n1, n2, n3, n4];
  let soma = 0;

  for (let i in notas) {
    soma += notas[i];
  }

  let media = soma / notas.length;

  resultado.classList.remove("aprovado");
  resultado.classList.remove("reprovado");

  if (media >= 6) {
    resultado.innerText = `Média: ${media.toFixed(2)} - Aprovado`;
    resultado.classList.add("aprovado");
  } else {
    resultado.innerText = `Média: ${media.toFixed(2)} - Reprovado`;
    resultado.classList.add("reprovado");
  }

  // 3º Passo: Trava (desabilita) os campos para o usuário não mudar a nota
  n1Input.disabled = true;
  n2Input.disabled = true;
  n3Input.disabled = true;
  n4Input.disabled = true;

  // Muda o texto do botão para "Limpar"
  btn.innerText = "Limpar";
}