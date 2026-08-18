export default function Tugas(Props) {
    return(
        <>
        <h1>Nama: {Props.nama}</h1>
        <p>Kelas: {Props.kelas}</p>
        <p>Hobi: {Props.hobi}</p>
        <p>Status: {Props.status ? "Aktif" : "tidak aktif"}</p>
        </>
    )
}