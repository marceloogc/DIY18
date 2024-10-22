import React, { useState } from "react";

function OrderForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [chips, setChips] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  const submitOrder = (event) => {
    event.preventDefault();

    // Verificar se os campos obrigatórios estão preenchidos
    if (!name || !email || !chips || !termsChecked) {
      alert("Field empty labels");
    } else {
      // Montar a mensagem do pedido
      let orderMessage = `Order name: ${name}. The email is: ${email}. I Want chips? ${chips}.`;
      if (specialRequests) {
        orderMessage += ` Any special requests? ${specialRequests}`;
      }
      alert(orderMessage);
    }
  };

  return (
    <form onSubmit={submitOrder}>
      <h1>Order a hamburger:</h1>

      <label>* Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <br />

      <label>* Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <br />

      <label>* Do you want to order chips?:</label>
      <select value={chips} onChange={(e) => setChips(e.target.value)} required>
        <option value="">--Do you want to order chips?--</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <br />
      <br />

      <label>Special requests?</label>
      <br />
      <textarea
        value={specialRequests}
        onChange={(e) => setSpecialRequests(e.target.value)}
        rows="4"
        cols="50"
      />
      <br />
      <br />

      <input
        type="checkbox"
        checked={termsChecked}
        onChange={(e) => setTermsChecked(e.target.checked)}
        required
      />
      <label> * I have read and agreed to the terms and conditions</label>
      <br />
      <br />

      <button type="submit">Make an order!</button>
    </form>
  );
}

export default OrderForm;
