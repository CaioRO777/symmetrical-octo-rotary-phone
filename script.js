function calcularMedia() {
  let n1 = Number(document.getElementById("nota1").value);
  let n2 = Number(document.getElementById("nota2").value);
  let n3 = Number(document.getElementById("nota3").value);
  let n4 = Number(document.getElementById("nota4").value);
  
  let notas = [n1, n2, n3, n4];
  let soma = 0;

  for (let i in notas) {
    soma += notas[i];
  }

  let media = soma / notas.length;
  let resultado = document.getElementById("resultado");

  // Remove classes antigas antes de aplicar nova
  resultado.classList.remove("aprovado");
  resultado.classList.remove("reprovado");

  if (media >= 6) {
    resultado.innerText = `Média: ${media.toFixed(2)} - Aprovado`;
    resultado.classList.add("aprovado");
  } else {
    resultado.innerText = `Média: ${media.toFixed(2)} - Reprovado`;
    resultado.classList.add("reprovado");
  }
}
