"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url =
        "https://ecoglo-1849b-default-rtdb.asia-southeast1.firebasedatabase.app/ecoglo/device1/latest.json";

      const res = await fetch(url);
      const data = await res.json();
      setLatest(data);
    }

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!latest) return <p style={{ padding: 20 }}>Loading...</p>;

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>EcoGlo Realtime Dashboard</h1>

      <div className="card">
        <h2>CO₂</h2>
        <p style={{ fontSize: 40 }}>{latest.co2} ppm</p>
      </div>

      <div className="card">
        <h2>pH</h2>
        <p style={{ fontSize: 40 }}>{latest.ph}</p>
      </div>

      <div className="card">
        <h2>Cahaya</h2>
        <p style={{ fontSize: 40 }}>{latest.lux} lx</p>
      </div>

      <div className="card">
        <h2>Suhu</h2>
        <p style={{ fontSize: 40 }}>{latest.temp} °C</p>
      </div>
    </div>
  );
}
