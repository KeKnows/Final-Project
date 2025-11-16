import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function Dashboard() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [workouts, setWorkouts] = useState([]);
  const user_id = 1; // replace with real user

  const fetchWorkouts = async () => {
    const res = await fetch(`${API_URL}/workouts/${user_id}`);
    const data = await res.json();
    setWorkouts(data);
  };

  useEffect(() => { fetchWorkouts(); }, []);

  return (
    <div style={{ maxWidth: 700, margin: "20px auto" }}>
      <h2>Dashboard</h2>
      <LineChart width={700} height={300} data={workouts}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
