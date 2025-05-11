import { useState } from "react";
import init, { sort_array } from "../pkg/wasm_rust"; // wasm-pack으로 빌드한 모듈 import

function App() {
  const [result, setResult] = useState("");

  const runTest = async () => {
    await init(); // wasm 초기화

    const SIZE = 25_000_000; // 약 100MB (4바이트 * 2500만)
    const randomValues = Array.from({ length: SIZE }, () =>
      Math.floor(Math.random() * SIZE)
    );

    // 각각 별도로 복사 (JS용, WASM용)
    const jsArray = [...randomValues];
    const wasmArray = new Uint32Array(randomValues); // Vec<u32>로 넘길 수 있게

    // JS 정렬 성능 측정
    const jsStart = performance.now();
    jsArray.sort((a, b) => a - b);
    const jsEnd = performance.now();

    // WASM 정렬 성능 측정
    const wasmStart = performance.now();
    const sortedWasmArray = sort_array(wasmArray); // Rust의 Vec<u32>로 매핑됨
    const wasmEnd = performance.now();

    setResult(
      `✅ JS sort: ${(jsEnd - jsStart).toFixed(2)}ms\n` +
        `🚀 WASM sort: ${(wasmEnd - wasmStart).toFixed(2)}ms`
    );
    console.log("js array to 100", jsArray.slice(0, 100)); // 처음 10개만
    console.log("wasm array to 100", sortedWasmArray.slice(0, 100)); // 처음 10개만
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🔁 JS vs WASM Sort Benchmark</h1>
      <button onClick={runTest}>Run Sort Test</button>
      <pre style={{ marginTop: "1rem", fontSize: "1.2rem" }}>{result}</pre>
    </div>
  );
}

export default App;
