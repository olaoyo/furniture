import Banner from "../../../banner/Banner.component";
import RegisterForm from "./registerForm/RegisterForm.component";

function Register() {
  return (
    <>
      <Banner header="Regsiter" route="Register" />
      <RegisterForm />
    </>
  );
}

export default Register;
