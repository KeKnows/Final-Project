import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL; 


  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        setMessage("Account created successfully!");
        setEmail("");
        setPassword("");
      } else {
        const errorData = await response.json();
        setMessage(errorData.detail || "Signup failed.");
      }
    } catch (error) {
      setMessage("Server error — check your API URL.");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Create an Account</h2>

      <form onSubmit={handleSignup}>
        {/* Email */}
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>

      {message && (
        <p style={{ marginTop: "20px", color: "red" }}>{message}</p>
      )}
    </div>
  );
}
