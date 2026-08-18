import { useRef, useState } from "react"

export default function TugasStateRef() {
    let [nama, setNama] = useState("Siapa kek")
    const inputRef = useRef()
    function ubahNama() {
        setNama(inputRef.current.value)
    }
    return(
        <div>
            <input className="border-2 border-black" ref={inputRef} type="text" />
            <button onClick={ubahNama}>Tampilkan nama</button>
            <h2>{nama}</h2>
        </div>
    )
}