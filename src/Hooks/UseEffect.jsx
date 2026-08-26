import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    let [count, setCount] = useState(0)
    useEffect(() => {
        // if (count > 0) {
        //     console.log(`Count berubah jadi ${count}`)
        //     alert(`Count berubah dari angka ${count - 1} ke ${count}`)
        // }
        setTimeout(() => {
            console.log("saya dibersihkan")
        }, 5000)
        return () => {
            console.log("aku dibersihin")
        }
    }, [count])
    function Plus() {
        setCount(count + 1)
    }
    function Minus() {
        setCount(count - 1)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Plus}>Plus</button>
      <button onClick={Minus}>Minus</button>
    </div>
  )
}
