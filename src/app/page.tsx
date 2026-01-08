import Navbar from "./components/Navbar";
import Options from "./components/Options";

export default function Home() {
  const today = new Date().toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <div>
        <Navbar />
        

        <Options />
        <p style={{ margin: "10px 0", fontSize: "14px", color: "#666", textAlign:'center' }}>
          {today} Reçelli Dükkan
        </p>
      </div>
    </>
  );
}
