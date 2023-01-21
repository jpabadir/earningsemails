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
    if (tickers.length < 5) {
      if (tickerInput) setTickers([...tickers, tickerInput]);
    } else {
      alert("Max 5 tickers for now. If you need more than that, email me at jp@northpnd.com.")
    }
    setTickerInput("");
  }

  function submitForm() {
    addDoc(collection(db, "form-submissions"), {
      email: emailInput,
      tickers: tickers
    });

    setEmailInput("");
    setTickers([]);

    toast("Your info has been submitted! Make sure you also pay otherwise you won't be subscribed and you won't receive any emails.")
  }

  return (
    <div>
      <div className="MainContent">
        <ToastContainer />
        <div style={{ minHeight: '90vh' }}>
          <h1>Welcome to earningsemails.com!</h1>
          <h3>What is it?</h3>
          <p>I was sick of missing earnings for <a href="https://www.jpabadir.com/investment-portfolio" target="_blank" rel="noopener noreferrer">stocks I have money in</a>, so I created this site. It will autmatically send you 2 emails for each earnings report:</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ol style={{ textAlign: 'left', maxWidth: '500px' }}>
              <div style={{ fontStyle: 'italic' }}>
                <li>One email when the company announces when they'll report their next earnings, so you can put it in your calendar. Or ignore it. I don't care.</li>
                <li>And another one which contains the earnings results as soon as they're out.*</li>
              </div>
            </ol>
          </div>
          <h3>Are you storing my raw credit card numbers in your database? Your shitty website with almost no CSS is not giving me any confidence.</h3>
          <p>No. Your data is handled by <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer">Stripe</a>.</p>
          <h3>Do I have to pay? What happens if I don't pay?</h3>
          <p>Yes. If you don't pay, your form submission will be stored in our database, but you won't receive any emails. To sign up, first <span className="Pay">fill out and submit the form below:</span></p>
          <form method="POST" action="">
            <div style={{ padding: '10px 0px' }}>
              <label for="email">Email address: </label>
              <input name="email" type="text" value={emailInput} onChange={(e) => setEmailInput(e.target.value)}></input>
            </div>
            <div style={{ padding: '10px 0px' }}>
              Tickers you want to subscribe to: {JSON.stringify(tickers)}
              <div>
                <input type="text" value={tickerInput} onChange={(e) => setTickerInput(e.target.value)}></input>
              </div>
            </div>
            <button type="button" style={{ marginLeft: '5px' }} onClick={addTicker}>Add</button>
            <br />
            <br />
            <br />
            <div style={{ padding: '10px 0px' }}>
              <button type="button" onClick={submitForm}>Submit</button>
            </div>
            <p>And then <span className="Pay">subscribe below</span> (2 months free if you pick yearly):</p>
            <stripe-pricing-table pricing-table-id="prctbl_1MSpmvL3EFqQagpsripMsRzT"
              publishable-key="pk_live_51MQZcwL3EFqQagpskkFLRQDlJAzJ6pzbKWjP45WUcakxhfJ2ImqKd0F6dfNo0dWP642He8pWizBPgDPMeg8dK5fw00nfoKNfB5">
            </stripe-pricing-table>
            <p>All prices in USD</p>
          </form>
        </div>
      </div>
      <div className="Footer">
        <div>
          Built in Toronto by&nbsp;<a className="FooterLink" href="https://www.northpnd.com" target="_blank" rel="noopener">North P&D</a>
        </div>
        <br />
        <div>
          <a className="FooterLink" style={{ padding: '0px 10px' }} href="/privacy.html">Privacy</a><a className="FooterLink" style={{ padding: '0px 10px' }} href="/disclaimers.html">* Disclaimers</a><a className="FooterLink" style={{ padding: '0px 10px' }} href="/contact.html">Contact</a>
        </div>
      </div>
    </div >
  );
}

export default App;



