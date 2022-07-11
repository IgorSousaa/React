import React, { Component } from "react";

class App extends Component {
  state = {
    prioridade: [
      {
        nome: "Igor",
        idade: 18,
        comidaFavorita: "Bife com Fritas"
      },
      {
        musica: "Jesus Chorou",
        musica2: "O menino que virou Deus",
        musica3: "Nós é Ruim e o Cabelo Ajuda"
      }
    ]
  };

  render() {
    return (
      <header>
        <h1>Atividade de React</h1>
        <main>
          <div>
            <h1>{this.state.prioridade[0].nome}</h1>
            <h2>{this.state.prioridade[0].idade}</h2>
            <h3>{this.state.prioridade[0].comidaFavorita}</h3>
          </div>

          <div>
            <ul>
              <li>{this.state.prioridade[1].musica}</li>
              <li>{this.state.prioridade[1].musica2}</li>
              <li>{this.state.prioridade[1].musica3}</li>
            </ul>
          </div>
        </main>
      </header>
    );
  }
}

export default App;
