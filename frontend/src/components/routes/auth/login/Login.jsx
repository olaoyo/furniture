import Banner from "../../../banner/Banner.component";
import LoginForm from "./loginForm/LoginForm.component";
import Info from "../../../info/Info.component";

function Login() {
  return (
    <>
      <Banner header="Login" route="Login" />
      <LoginForm />
      <Info />
    </>
  );
}

export default Login;