import { useEffect, useState } from "react";
import initWasm, { double } from "../pkg/wasm_example"; // 패키지명은 Cargo.toml [package] name 기준

function App() {
  const [currentNumber, setCurrentNumber] = useState<number>(1);

  useEffect(() => {
    initWasm(); // wasm 모듈 초기화
  }, []);

  const handleClick = () => {
    const value = double(currentNumber);
    setCurrentNumber(value);
  };

  return (
    <div>
      <h1>Wasm Double Test</h1>
      <button onClick={handleClick}>Double {currentNumber}</button>
    </div>
  );
}

export default App;
