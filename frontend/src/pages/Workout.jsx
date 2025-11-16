import { useState, useEffect } from "react";

export default function Workout() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const user_id = 1; // replace with real user id or token decoded

  const fetchWorkouts = async () => {
    const res = await fetch(`${API_URL}/workouts/${user_id}`);
    const data = await res.json();
    setWorkouts(data);
  };

  const handleAddWorkout = async (e) => {
    e.preventDefault();
    await fetch(`${API_URL}/workouts/`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user_id, type, value: parseFloat(value), workout_date: date}),
    });
    setType(""); setValue(""); setDate("");
    fetchWorkouts();
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/workouts/${id}`, {method: "DELETE"});
    fetchWorkouts();
  };

  useEffect(() => { fetchWorkouts(); }, []);

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h2>Workout Tracker</h2>
      <form onSubmit={handleAddWorkout}>
        <input placeholder="Type" value={type} onChange={e => setType(e.target.value)} required/>
        <input placeholder="Value" type="number" value={value} onChange={e => setValue(e.target.value)} required/>
        <input placeholder="Date" type="date" value={date} onChange={e => setDate(e.target.value)} required/>
        <button type="submit">Add Workout</button>
      </form>
      <ul>
        {workouts.map(w => (
          <li key={w.id}>
            {w.date} - {w.type}: {w.value} 
            <button onClick={() => handleDelete(w.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
