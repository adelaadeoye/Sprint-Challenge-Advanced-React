import React from "react";
import "./App.css";
import ContentTable from "./component/ContentTable";
import NavBar from "./component/NavBar";
import axios from "axios";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Graph from "./component/Graph";

class App extends React.Component {
  
    state = {
      players: []
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
        
        <Route exact path="/" render={()=>(<ContentTable players={this.state.players}/>)}  />
        <Route exact path="/graph" render={()=>(<Graph players={this.state.players}/>)}  />
        {/* <Route exact path="/graph" component={Graph}/> */}
        </Router>
      </div>
    );
  }
}

export default App;
