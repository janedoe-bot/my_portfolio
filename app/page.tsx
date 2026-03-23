import Nav from "./components/Nav";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <main style={{ paddingTop: "100px" }}>
        <Work />
        <Contact />
      </main>
    </div>
  );
}
