"use client";

import { useState } from "react";

const Newsletter = () =>  {
  const [email, setEmail] = useState("");

  const handleNewsletter = () => {
    alert(email);
  };

  return (
    <section id="Newsletter">
      <label>Newsletter</label>
      <input
        type="email" value={email} placeholder="Votre email" onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleNewsletter}>OK</button>
    </section>
  );
}

export default Newsletter;