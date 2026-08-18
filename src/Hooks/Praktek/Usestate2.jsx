import { useState } from "react"

export default function Praktek2() {
    let [nama, setNama] = useState("Ali")
    function Ubahnama() {
        setNama("Fulan")
    }
    return(
        <>
        <button onClick={Ubahnama}>Ubah nama</button>
        <h1 className="text-4xl">{nama}</h1>
        </>
    )
}