import Banner from "../../../banner/Banner.component";
import LoginForm from "./loginForm/LoginForm.component";

function Login() {
  return (
    <>
      <Banner header="Login" route="Login" />
      <LoginForm />
    </>
  );
}

export default Login;