// tabuada
function gerarTabuada() {
  var numero = parseInt(document.getElementById("numero").value)
  var tabela = document.getElementById("tabela-tabuada");
  tabela.innerHTML = "";
  // i++
  for (var i = 1; i <= 10; i = i + 1) {
    var resultado = numero * i
    var linha = "<tr><td>" + numero + " X " + i + "</td><td>" + " = " + resultado + "</td></tr>"
    tabela.innerHTML += linha
  }
}
// dark mode com toogle button
function toggleDarkMode() {
  if (document.documentElement.classList.contains("light")) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  } else if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  } else {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }
}
