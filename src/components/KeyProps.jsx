import Props from './Props'
const Key = () => {
    return(
        <section>
            {student.map((students) => {
                return(
                    <Props key={students.id} nama={students.nama} peran={students.peran} />
                )
            })}
        </section>
    )
}
export default Key