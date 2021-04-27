import React from "react";
import "./App.css";
import RAM from "./RAM.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      personajes: [],
      isFetch: true,
    };
  }

  // Como covertir los datos de API en JSON
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((personjson) =>
        this.setState({ personajes: personjson.results, isFetch: false })
      );
  }
  render() {
    if (this.state.isFetch) {
      return "Loading..";
    }

    return (
      <div className="App">
        <div id="Nav">
          <img id="Logo" src={RAM}></img>
        </div>
        <div id="Contenido">
          {/* Como Recorrer todo el Objepto */}
          {this.state.personajes.map((item) => {
            return <Card key={item.name} name={item.name} image={item.image} />;
          })}
        </div>
      </div>
    );
  }
}

function Card(props) {
  return (
    <div>
      <div className="card">
        <img src={props.image} class="card-img-top" />
        <div className="card-body">
          <p className="card-text">{props.name}</p>
        </div>
      </div>
    </div>
  );
}
export default App;
