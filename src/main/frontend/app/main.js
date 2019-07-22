import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    fetch("/api/v1/pets").then((resp) => {
      if(resp.ok) {
        return resp
      }
      else {
        throw new Error(resp.Error)
      }
    }).then(resp => {
      return resp.json();
    }).then(petsPayload => {
      this.setState({pets: petsPayload.content})
    }) 
  }

  render() {
    const petListItems = this.state.pets.map((pet) => {
      return (<li><h2>{ pet.name }</h2><p>{ pet.species}</p></li>)
    })
    return (<ul>{petListItems}</ul>)
  }
}

ReactDom.render(<App />,document.getElementById("app"))