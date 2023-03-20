import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../../../loading/Loading.component";
import Message from "../../../../message/Message.component";

import { register } from "../../../../../redux/actions/userActions";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { RegisterFormStyles } from "./RegisterForm.styles";

import {
  Form,
  Header,
  LabelAndInput,
  Label,
  Input,
  Paragraph,
  LoginAndRegister,
} from "../../../../inputs/formInputs/FormInputs.styles";

import { AddToCartButton as RegisterButton } from "../../../../buttons/Buttons";

import { routeURL } from "../../../../../api/api";

function RegisterForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split("=") : "/";

  const { error, loading, userInfo } = useSelector((state) => state.userRegister);

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const registerHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Your memorable passwords are different 😭");
      
    } else {
      dispatch(register(name, surname, email, password));
    }
  };

  return (
    <>
      {message && <Message>{message}</Message>}
      {error && <Message>{error}</Message>}
      {loading && <Loading />}
      <RegisterFormStyles>
        <Form onSubmit={registerHandler}>
          <Header>Create an Account</Header>
          <LabelAndInput>
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="What's your first name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              id="name"
              required
            />
          </LabelAndInput>
          <LabelAndInput>
            <Label>Surname</Label>
            <Input
              type="text"
              placeholder="What's your last name"
              value={surname}
              onChange={(event) => setSurname(event.target.value)}
              id="surname"
              required
            />
          </LabelAndInput>
          <LabelAndInput>
            <Label>Email address</Label>
            <Input
              type="email"
              placeholder="Please select your unique email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              id="email"
              required
            />
          </LabelAndInput>
          <LabelAndInput>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Please choose a memorable password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              id="password"
              required
            />
          </LabelAndInput>
          <LabelAndInput>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              placeholder="Confirm your memorable password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              id="confirmPassword"
              required
            />
          </LabelAndInput>
          <LoginAndRegister>
            <RegisterButton type="submit">Register</RegisterButton>
            <Link
              to={redirect ? `/login?redirect=${redirect}` : routeURL.auth.login}
            >
              <Paragraph light>Log in</Paragraph>
            </Link>
          </LoginAndRegister>
        </Form>
      </RegisterFormStyles>
    </>
  );
}

export default RegisterForm;

