import { useState } from "react";
export default function UseState() {
    let [angka, setAngka] = useState(0)
    function tambah() {
        setAngka(angka + 1)
        console.log(angka)
    }
    return(
        <>
        <h1>{angka}</h1>
        <button onClick={tambah}>Tambah2</button>
        </>
    )
}