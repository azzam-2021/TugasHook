import AppUseContext from "./AppUseContext";
import LoginForm from "./UseStateRef/FormControlUncontrol/LoginForm";
import LoginFormControlled from "./UseStateRef/FormControlUncontrol/LoginFormControlled";
import LoginFormRef from "./UseStateRef/FormControlUncontrol/LoginFormRef";
import Tugas from "./UseStateRef/FormControlUncontrol/TugasLogin";
import TugasEffect from "./UseStateRef/Praktek/TugasEffect";
import UseEffect from "./UseStateRef/UseEffect";
import Homecontext from "./learnUseContext/Homecontext";
import Homecon from "./learnUseContext/Lagi/Homecon";
import Homeprop from "./learnUseContext/OperanPropsRibet/Homeprop";
import RadixPrimitive from "./StylesComponent/RadixPrimitive";
import Example1 from "./UseReducer/Example1";
import Example2 from "./UseReducer/Example2";
import TugasReducer from "./UseReducer/TugasReducer";

export default function App2() {
  return (
    <>
      {/* <LoginForm />
        <LoginFormRef />
        <LoginFormControlled /> */}
      {/* <Tugas /> */}
      {/* <RadixPrimitive /> */}
      {/* <UseEffect /> */}
      {/* <TugasEffect /> */}
      {/* <Homecontext />
        <Homecon />
        <Homeprop /> */}
      {/* <AppUseContext /> */}
      <Example1/>
      <Example2/>
      <TugasReducer />
    </>
  );
}
