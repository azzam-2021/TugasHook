import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Navbar";
import Fragment from "./components/Fragment";
import Props from "./components/Props";
import Tugas from "./assets/Tugas4";
import Dasar from "./UseStateRef/Dasar";
import UseState from "./UseStateRef/UseState";
import Praktek from "./UseStateRef/Praktek/Usestate";
import Praktek2 from "./UseStateRef/Praktek/Usestate2";
import BasicRef from "./UseStateRef/UseRef";
import TugasStateRef from "./UseStateRef/Praktek/tugasStateRef";

function Halodunia() {
  return <h1>Halo dunia</h1>;
}

export default function App() {
  const student = [
    {
      id: 1,
      nama: "Yuji",
      peran: "IT",
      islulus: true,
      isStar: true,
    },
    {
      id: 2,
      nama: "Doni",
      peran: "MTK",
      islulus: true,
      isStar: false,
    },
    {
      id: 3,
      nama: "Sam",
      peran: "IPS",
      islulus: false,
      isStar: true,
    },
    {
      id: 4,
      nama: "Rio",
      peran: "Gatau",
      islulus: false,
      isStar: false,
    },
  ];

  return (
    <>
      <h1 className="text-black">REACT</h1>
      <Halodunia />
      <Halodunia />
      <Halodunia />
      <Header />
      <Nav />
      <Card />
      <Footer />
      <Fragment />
      <Props nama="yelena" peran="black widow" />
      <section>
        {student.map((students) => {
          return (
            <Props
              key={students.id}
              nama={students.nama}
              peran={students.peran}
              islulus={students.islulus}
              isStar={students.isStar}
            />
          );
        })}
      </section>
      <section className="bg-gray-300 p-2">
        <Tugas nama={"Ahmad"} kelas={10} status={true} />
        <Tugas nama={"Sam"} kelas={11} status={false} />
        <Tugas nama={"Doom"} kelas={12} status={true} />
      </section>
      <Dasar />
      <UseState />
      <Praktek />
      <Praktek2 />
      <BasicRef />
      <TugasStateRef />
    </>
  );
}
