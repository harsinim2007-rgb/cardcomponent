import React from "react";
import Card from "./Card";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>💖 React Like Cards</h1>

      <div className="card-container">
        <Card title="🌸 Flower" />
        <Card title="🌊 Ocean" />
        <Card title="🌄 Mountains" />
        <Card title="🌙 Moon" />
      </div>
    </div>
  );
}
