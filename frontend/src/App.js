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

    toast("Your info has been submitted! Make sure you also pay otherwise you won't be subscribed and we won't send you any emails.")
  }

  return (
    <div>
      <div className="MainContent">
        <ToastContainer />
        <div style={{ minHeight: '90vh' }}>
          <h1>Welcome to earningsemails.com!</h1>
          <h2>What is it?</h2>
          <p>I was sick of missing earnings for stocks I follow. So I created this site. It will autmatically send you 2 emails for each earnings report:</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ol style={{ textAlign: 'left', maxWidth: '500px' }}>
              <strong>
                <li>One email when the company announces when they'll report their next earnings, so you can put it in your calendar. Or ignore it. I don't care.</li>
                <li>And another one which contains the earnings results as soon as they're out.</li>
              </strong>
            </ol>
          </div>
          <h2>Do I have to pay?</h2>
          <p>Yes. To sign up, fill out and submit the form below:</p>
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
            <div>
              <button type="button" onClick={submitForm}>Submit</button>
            </div>
            <stripe-pricing-table pricing-table-id="prctbl_1MSpmvL3EFqQagpsripMsRzT"
              publishable-key="pk_live_51MQZcwL3EFqQagpskkFLRQDlJAzJ6pzbKWjP45WUcakxhfJ2ImqKd0F6dfNo0dWP642He8pWizBPgDPMeg8dK5fw00nfoKNfB5">
            </stripe-pricing-table>
          </form>
        </div>
      </div>
      <div className="Footer">
        <div>
          Built in Toronto by&nbsp;<a href="https://www.northpnd.com" target="_blank" rel="noopener">North P&D</a>
        </div>
        <br />
        <div>
          <a style={{ padding: '0px 10px' }} href="/privacy.html">Privacy</a><a style={{ padding: '0px 10px' }} href="/disclaimers.html">Disclaimers</a><a style={{ padding: '0px 10px' }} href="/contact.html">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default App;



