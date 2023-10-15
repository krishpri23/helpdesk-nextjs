"use client";

import React, { useState } from "react";

export default function AuthForm({ handleSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section>
      {/* passing email & password props to handle the submission */}
      <form onSubmit={(e) => handleSubmit(e, email, password)}>
        {" "}
        <input
          type="text"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-primary">Submit</button>
      </form>
    </section>
  );
}
