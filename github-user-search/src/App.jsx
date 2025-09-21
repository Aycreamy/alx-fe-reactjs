import Search from "./components/Search";
import './App.css';

export default function App() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "1rem" }}>
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
}
