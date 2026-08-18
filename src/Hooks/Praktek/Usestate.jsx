import { useState } from "react";

export default function Praktek() {
    let [angka, setAngka] = useState(0)
    let [angka2, setAngka2]= useState(0)
    let [angka3, setAngka3] = useState(0)
    function tambah() {
        setAngka(angka + 1)
    }
    function tamba2h() {
        setAngka2(angka2 + 2)
    }
    return(
    <>
    <br />
    <button onClick={tambah}>Klik buat nambah</button>
    <h1 className="text-4xl">{angka}</h1>
    <button onClick={tamba2h}>Klik buat nambah 2</button>
    <h1 className="text-4xl">{angka2}</h1>
    <button onClick={()=>setAngka3(angka3 + 3)}>Klik buat nambah 3</button>
    <h1 className="text-4xl">{angka3}</h1>
    </> )
}