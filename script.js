//          chave.  valor.
var team1 = {
  icon:
    "https://thumbs.dreamstime.com/b/%C3%ADcone-dos-desenhos-animados-da-mulher-projeto-da-pessoa-gr%C3%A1fico-de-vetor-73696512.jpg",
  nome: "Team1",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var teams = [team1];

function calculaPontos(player) {
  var pontos = player.vitorias * 3 + player.empates;
  return pontos;
}

function exibir(teams) {
  var elemento = "";
  for (var i = 0; i < teams.length; i++) {
    elemento += "<tr><td>" + `<img src=" ${teams[i].icon} ">` + "</td>";
    elemento += "<td>" + teams[i].nome + "</td>";
    elemento += "<td>" + teams[i].vitorias + "</td>";
    elemento += "<td>" + teams[i].empates + "</td>";
    elemento += "<td>" + teams[i].derrotas + "</td>";
    elemento += "<td>" + teams[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    //elemento +=
    //  "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaEquipes = document.getElementById("tabelaJogadores");
  tabelaEquipes.innerHTML = elemento;
}

exibir(teams);

//botões
function adicionarVitoria(i) {
  var team = teams[i];
  team.vitorias++;
  team.pontos = calculaPontos(team);

  for (var cont = 0; cont < teams.length; cont++) {
    if (cont != i) {
      var outrasEquipes = teams[cont];
      outrasEquipes.derrotas++;
    }
  }
  exibir(teams);
}

function adicionarEmpate(i) {
  for (var t = 0; t < teams.length; t++) {
    var team = teams[t];
    team.empates++;
    team.pontos = calculaPontos(team);
  }
  exibir(teams);
}

//function adicionarDerrota(i) {
//  var team = teams[i];
//  team.derrotas++;
//  for (var cont = 0; cont < teams.length; cont++) {
//    if (cont != i) {
//      var outrasEquipes = teams[cont];
//      outrasEquipes.vitorias++;
//    }
//  }
//  exibir(teams);
//}

function adicionarTime() {
  var nome = document.getElementById("teamName");
  var icone = document.getElementById("teamIcon");
  teams.push({
    icon: icone.value,
    nome: nome.value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
  nome.value = "";
  icone.value = "";
  exibir(teams);
}

function zerarPontos() {
  for (var i = 0; i < teams.length; i++) {
    teams[i].vitorias = 0;
    teams[i].empates = 0;
    teams[i].derrotas = 0;
    teams[i].pontos = 0;
  }
  exibir(teams);
}