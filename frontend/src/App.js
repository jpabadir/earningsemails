import "./App.css";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
  apiKey: "AIzaSyAEkov0mBCzC8TiOGgtQfp1_BU_rZvmWiw",
  authDomain: "earningsemails.firebaseapp.com",
  projectId: "earningsemails",
  storageBucket: "earningsemails.appspot.com",
  messagingSenderId: "68053821504",
  appId: "1:68053821504:web:7a94cbde375c6ea3e397a5",
  measurementId: "G-ZLR4JH1PE3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

function App() {
  const [emailInput, setEmailInput] = useState("");
  const [tickerInput, setTickerInput] = useState("");
  const [tickers, setTickers] = useState([]);

  function addTicker() {
    if (tickerInput) setTickers([...tickers, tickerInput]);
    setTickerInput("");
  }

  function submitForm() {
    addDoc(collection(db, "form-submissions"), {
      email: emailInput,
      tickers: tickers
    });

    setEmailInput("");
    setTickers([]);

    toast("Ok congrats thanks, you're subscribed!")
    setTimeout(function () {
      toast("You like these little popup messages huh, don't you? I know, I know you do. It's ok.")
    }, 2500);
    setTimeout(function () {
      toast("Here's one more just for you 😘")
    }, 6000);
  }

  return (
    <div className="App">
      <ToastContainer />
      <h1>Welcome to earningsemails.com!</h1>
      <h2>What is it?</h2>
      <p>I was sick of missing earnings for stocks I follow. So I created this site.</p>
      <p>It will autmatically send you 2 emails for each earnings report:</p>
      <h2>How does it work?</h2>
      <h3>Put your email address below</h3>
      <form method="POST" action="">
        <input type="text" value={emailInput} onChange={(e) => setEmailInput(e.target.value)}></input>
        <h3>And add all the stocks you want to subscribe to below</h3>
        Tickers: {JSON.stringify(tickers)}
        <input type="text" value={tickerInput} onChange={(e) => setTickerInput(e.target.value)}></input>
        <button type="button" style={{ marginLeft: '5px' }} onClick={addTicker}>Add</button>
        <br />
        <br />
        <br />
        <h3>And then submit using the button below.</h3>
        <div>
          <button type="button" onClick={submitForm}>Submit</button>
        </div>
      </form>
      <p>Privacy: your data is stored on Firestore, which is a thing by Google, so there's that. It's stored in the US and it'll be looked at my me and anyone I want to show it to. If you don't like that, don't sign up.</p>
    </div>
  );
}

export default App;
