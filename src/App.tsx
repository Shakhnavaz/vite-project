import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);


  return (
    <div className="flex flex-col space-y-5 items-center justify-center w-full h-screen">
      <h1 className="text-3xl font-bold underline w-fit">{count}</h1>
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className="p-4 bg-slate-500 text-white rounded-md"
      >
        decrement
      </button>

      <button
        onClick={increment}
        className="p-4 bg-slate-700 text-white rounded-lg"
      >
        increment
      </button>
    </div>
  );
};

export default App;
