let angka = 1
export default function Dasar() {
    function Tambah() {
        console.log(angka++);
    }
    return(
        <>
        <button onClick={Tambah}>Tambah</button>
        </>
    )
}