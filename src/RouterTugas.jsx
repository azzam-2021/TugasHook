import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import TugasRouter from "./ReactRouter/Tugas/TugasRouter";
import DaftarSantri from "./ReactRouter/Tugas/DaftarSantri";
import DetailSantri from "./ReactRouter/Tugas/DetailSantri";
import About from "./ReactRouter/Tugas/About";
import Notfound from "./ReactRouter/Tugas/Notfound";

// const routerTugas = createBrowserRouter([
//     {
//         path: '/',
//         element: <TugasRouter />
//     },
//     {
//         path: '/santri',
//         element: <DaftarSantri />
//     },
//     {
//         path: '/santri/:id',
//         element: <DetailSantri />
//     },
//     {
//         path: '/about',
//         element: <About />
//     },
//     {
//         path: '/*',
//         element: <Notfound />
//     }
// ])
const routerTugas = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<TugasRouter/>}/>
            <Route path="santri" element={<DaftarSantri/>}/>
            <Route path="about" element={<About/>}/>
        </Route>
    )
)
export default routerTugas