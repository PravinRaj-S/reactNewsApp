import { useState } from "react";
import Navbar from "./components/Navbar";
import Newsboard from "./components/Newsboard";

function App() {

  const [category, setCategory] = useState("general")

  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <Newsboard category={category} />
    </div>
  );
}

export default App;
