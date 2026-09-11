import { useRef } from "react";

export default function BasicRef() {
    const inputRef =  useRef()
    function focusInput() {
        inputRef.current.focus()
    }
    return(
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Fokus</button>
        </div>
    )
}