import React from "react";
import "./App.css";
class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    const id = 2;
    fetch(`http://localhost:8080/api/v1/livros/id/` + id + `?api_key=APIKEY`)
      //fetch("http://api.themoviedb.org/3/movie/" + id + "?api_key=APIKEY")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>{" "}
      </div>
    );
  }
}

export default App;
