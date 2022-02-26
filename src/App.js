import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    try {
      setLoading(!loading);
      const response = await axios.get("/api/users");
      setOutput(response.data.users);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1> Data </h1>
      <button onClick={loadData}> Click to load data from server </button>
      {loading && <div className="loader center" id="loader"></div>}
      <ul>
        {output.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
