"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url =
      "https://ecoglo-1849b-default-rtdb.asia-southeast1.firebasedatabase.app/ecoglo/device1/latest.json";

    const interval = setInterval(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.error(err));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!data) {
    return (
      <div className="loading">
        <h2>Sedang mengambil data...</h2>
      </div>
    );
  }

  return (
    <main className="container">
      <h1 className="title">EcoGlo Realtime Dashboard</h1>

      <div className="grid">
        <div className="card">
          <h3>CO₂</h3>
          <p className="value">{data.co2} ppm</p>
        </div>

        <div className="card">
          <h3>pH</h3>
          <p className="value">{data.ph.toFixed(2)}</p>
        </div>

        <div className="card">
          <h3>Cahaya</h3>
          <p className="value">{data.lux} lx</p>
        </div>

        <div className="card">
          <h3>Suhu</h3>
          <p className="value">{data.temp.toFixed(2)} °C</p>
        </div>
      </div>

      <p className="timestamp">
        Terakhir diperbarui: <b>{new Date(data.ts * 1000).toLocaleString()}</b>
      </p>
    </main>
  );
}

