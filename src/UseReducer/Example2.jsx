import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "penambahan") {
    return state + 1;
  }
  if (action.type === "pengurangan") {
    return state - 1;
  }
}
function Example2() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex gap-5">
      <h1 className="text-4xl font-bold">UseReducer beneran</h1>
      <h1 className="text-4xl font-bold">{state}</h1>
      <button onClick={() => dispatch({ type: "penambahan" })}>Tambah 1</button>
      <button onClick={() => dispatch({ type: "pengurangan" })}>kurang 1</button>
    </div>
  );
}

export default Example2;
