import React from "react";
import CIK from './CIK.json';

function NetIncomeLoss() {
    console.log(CIK)
    return (
      <div>
        <div>
            {CIK.fields}
            {/* { CIK.fields.map(post => {
                return(
                    <p>{ post.fields }</p>
                )
            })} */}
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