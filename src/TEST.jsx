import { useEffect, useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import Title from "./components/Title";

function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  useEffect(() => {
    // TODO: fetch de nuestra super API
  }, []);

  return (
    <div className="App">
      {/* <Title />
      <Title text="texto del componente 2" />
      <Title text="texto del componente 3" /> */}

      {/* <Button />
      <Button onClick={() => alert("Primer boton")} /> */}
      <Button onClick={() => setCount(count + 1)} text="+1" />
      <Title text={`Number of clicks: ${count}`} />
    </div>
  );
}

export default App;
