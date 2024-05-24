import React,{useState} from "react";
import {Principal} from "@dfinity/principal";
import {token_backend as Token} from "../../../declarations/token_backend";

function Transfer() {
  const [receipentId, setId] = useState("");
  const [amount,setAmount] = useState("");
  const [isDisabled,setDisabled] = useState(false);
  const [feedback,setFeedback] = useState("");
  const [isHidden,setHidden] = useState(true);
  async function handleClick() {
    setHidden(true);
    setDisabled(true);
    const receipent = Principal.fromtext(receipentId);
    const amountToTransfer = Number(amount);
    const result = await Token.transfer(receipent,amountToTransfer);
    setHidden(true);
    setFeedback(result);
    setDisabled(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={receipentId}
                onChange={(e) => setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
