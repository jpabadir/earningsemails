import "./App.css";
import NetIncomeLoss from "./components/NetIncome/netincome";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NetIncomeLoss />
        </header>
      </div>
    );
  }
}

export default App;
