import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token_backend as Token} from "../../../declarations/token_backend"; 

function Balance() {
  const [inputValue, setInput] = useState(""); 
  const [balanceResult, setBalance] = useState("");
  const [symbol1, setSymbol] = useState("");
  const [isHidden, setHidden] = useState(true);

  async function handleClick() {
    try{
      const principal = Principal.fromText(inputValue);
      setHidden(false);
      const balance = await Token.balanceOf(principal);
      setBalance(balance.toString());
      setSymbol(await Token.getSymbol());
      
    } catch (error) {
      console.error("Failed to fetch balance:", error);
      setBalance("Error fetching balance");
    }
  }

  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e) => setInput(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button id="btn-request-balance" onClick={handleClick}>
          Check Balance
        </button>
      </p>
      <p hidden={isHidden}>This account has a balance of {balanceResult} {symbol1}</p>
    </div>
  );
}

export default Balance;
