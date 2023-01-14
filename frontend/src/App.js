import "./App.css";
import { useState } from "react";

function App() {
  const [tickerInput, setTickerInput] = useState("");
  const [tickers, setTickers] = useState([]);

  function addTicker() {
    if (tickerInput) setTickers([...tickers, tickerInput]);
    setTickerInput("");
  }

  return (
    <div className="App">
      <h1>Welcome to earningsemails.com!</h1>
      <h2>What is it?</h2>
      <p>I was sick of missing earnings for stocks I follow. So I created this site.</p>
      <p>It will autmatically send you 2 emails for each earnings report:</p>
      <h2>How does it work?</h2>
      <h3>Put your email address below</h3>
      <form method="POST" action="">
        <input type="text"></input>
        <h3 className="text-left">Put your email address below</h3>
        <h3>And add all the stocks you want to subscribe to below</h3>
        Tickers: {JSON.stringify(tickers)}
        <input type="text" value={tickerInput} onChange={(e) => setTickerInput(e.target.value)}></input>
        <button type="button" style={{ marginLeft: '5px' }} onClick={addTicker}>Add</button>
        <br />
        <br />
        <br />
        <h3>And then submit using the button below.</h3>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
