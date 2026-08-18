/* const Props = (props) => {
     return(
        <section>
            <h2>Nama: {props.nama}</h2>
            <p>Peran: {props.peran}</p>
        </section>
    )
}*/
const Props = ({nama, peran, islulus, isStar}) => {
    return(
    <section>
        <h2>Nama: {nama}</h2>
        <p>Peran: {peran}</p>
        <p>Status: {islulus ? "lulus" : "tidak lulus"}</p>
        <p>Bintang: {isStar && <span>🌟</span>}</p>
    </section>
    )
}
export default Props