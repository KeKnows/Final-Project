import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setMessage(data.detail || "Signup failed");
      } else {
        setMessage("Signup successful!");
        setEmail(""); setPassword("");
      }
    } catch (err) {
      setMessage("Server error");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
