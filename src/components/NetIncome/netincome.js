import React from "react";
import CIK from "./CIK.json";
import { useState } from "react";

function NetIncomeLoss() {
  const [ticker, tickerValue] = useState("");
  function clickToGetTicker() {
    if (CIK.hasOwnProperty("data")) {
      console.log("Key Found!");
    }
    else {
      console.log("Key not Found")
    }
  }
  //console.log(CIK)
  return (
    <div>
      <div>
        {/* {INPUT BOX} */}
        <input
          name="searchTicker"
          type="text"
          id="searchTicker"
          onChange={(value) => {
            tickerValue(value.target.value);
          }}
        />
        <input type="button" value="Search" onClick={clickToGetTicker} />
      </div>
      <div>
        {/* {{CIK.fields[1]}} */}
        {CIK.fields.map((list) => {
          return <p key={list}>{list}</p>;
        })}
      </div>
    </div>
  );
}

export default NetIncomeLoss;

// Take ticker input from user then find the corresponding CIK number.
// Fill the left of the CIK number with 0's until there are a total of 10 digits. (CIK numbers must be 10 digits including 0's)
// Plug the CIK number into https://data.sec.gov/api/xbrl/companyconcept/CIK##########/us-gaap/NetIncomeLoss.json.
// Send a GET request.
// Read JSON with JS and get the value of the "val" key using document.getElementById.
// Print the values.
