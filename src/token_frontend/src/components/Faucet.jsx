import React,{useState} from "react";
import {token_backend as Token} from "../../../declarations/token_backend";

function Faucet() {
  const [isDisabled,setDisabled] = useState(false);
  const [buttonText,setText] = useState("Gimme gimme");
  async function handleClick(event) {
    setDisabled(true);
    const result = await Token.payOut();
    setText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DMAN tokens here! Claim 10,000 DMAN tokens to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled = {isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
