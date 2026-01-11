import AddWasteForm from "@/components/AddWasteForm";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>🌱 GreenPath</h1>
      <p>Report waste in your area.</p>
      <AddWasteForm />
    </main>
  );
}
