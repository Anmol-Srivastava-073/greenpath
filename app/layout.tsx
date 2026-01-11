import "./globals.css";

export const metadata = {
  title: "GreenPath",
  description: "Smart Waste Routing App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
