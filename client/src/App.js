import React from "react";
import "./App.css";
import ContentTable from "./component/ContentTable";
import NavBar from "./component/NavBar";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(typeof res.data);
        const result = res.data.map(obj => {
          return {
            name: obj.name,
            country: obj.country,
            searches: obj.searches
          };
        });
        this.setState({
          players: result
        });
        {
          console.log(this.state.players);
        }
      })
      .catch(error => {
        console.log(error, "No data recieve");
      });
  }
  render() {
    return (
      <div className="App">
        <Router>
        <NavBar />
        <ContentTable players={this.state.players} />
        </Router>
      </div>
    );
  }
}

export default App;
