export const metadata = {
  title: "EcoGlo Dashboard",
  description: "Monitoring CO2, pH, Suhu, dan Intensitas Cahaya secara realtime.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
