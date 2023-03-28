import Banner from "../../../banner/Banner.component";
import RegisterForm from "./registerForm/RegisterForm.component";
import Info from "../../../info/Info.component";

function Register() {
  return (
    <>
      <Banner header="Regsiter" route="Register" />
      <RegisterForm />
      <Info />
    </>
  );
}

export default Register;
