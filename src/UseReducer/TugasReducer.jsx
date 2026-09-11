import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "tambah") {
    return state + 1;
  }
  if (action.type === "kurang") {
    return state - 1;
  }
  if (action.type === "reset") {
    return state - state;
  }
}
function TugasReducer() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="flex gap-5">
      <h1 className="text-4xl font-bold">Tugas useReducer</h1>
      <h1 className="text-4xl font-bold">{state}</h1>
      <button onClick={() => dispatch({ type: "tambah" })}>Tambah</button>
      <button onClick={() => dispatch({ type: "kurang" })}>kurang</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default TugasReducer;
