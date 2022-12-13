import React from "react";
import CIK from "./CIK.json";
import { useState } from "react";

function NetIncomeLoss() {
  const [ticker, setTicker] = useState("AAPL");
  const [cik, setCik] = useState("");

  function fetchLocation() {
    fetch(
      "https://www.sec.gov/Archives/edgar/data/320193/000032019321000056/aapl-20210327.htm",
      {
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    ).then((response) => console.log(response));
    //.then((json) => console.log(json));
  }

  function clickToGetTicker() {
    if (CIK[ticker]) {
      //setCik(CIK[ticker])
      setCik(("" + CIK[ticker]).padStart(10, "0"));
      console.log(cik);

      fetchLocation();
    } else {
      alert("Not valid");
    }
  }
  return (
    <div>
      <div>
        <input
          name="searchTicker"
          type="text"
          id="searchTicker"
          onChange={(value) => {
            setTicker(value.target.value.toUpperCase());
          }}
        />
        <input type="button" value="Search" onClick={clickToGetTicker} />
        <p>{cik}</p>
      </div>
    </div>
  );
}

export default NetIncomeLoss;

// Take ticker input from user then find the corresponding CIK number. (DONE)
// Fill the left of the CIK number with 0's until there are a total of 10 digits. (CIK numbers must be 10 digits including 0's)
// Plug the CIK number into https://data.sec.gov/api/xbrl/companyconcept/CIK##########/us-gaap/NetIncomeLoss.json.
// Send a GET request.
// Read JSON with JS and get the value of the "val" key.
// Print the values.