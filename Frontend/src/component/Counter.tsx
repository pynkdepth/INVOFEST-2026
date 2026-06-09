import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Anda Mengklik Sekian Kali</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Tambah
      </button>
    </div>
  );
};

export default Counter;