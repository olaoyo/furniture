import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Loader from "../../../../loading/Loading.component";
import Message from "../../../../message/Message.component";

import { login } from "../../../../../redux/actions/userActions";

import { LoginFormStyles } from "./LoginForm.styles";

import {
  Form,
  Header,
  LabelAndInput,
  Label,
  Input,
  CheckboxAndText,
  Checkbox,
  Paragraph,
  LoginAndRegister,
} from "../../../../inputs/formInputs/FormInputs.styles";

import { AddToCartButton as LoginButton } from "../../../../buttons/Buttons";

import { routeURL } from "../../../../../api/api";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const { error, loading, userInfo } = useSelector((state) => state.userLogin);

  // If user is logged in, redirect
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <LoginFormStyles>

        <Form onSubmit={submitHandler}>

          <Header>Log In</Header>

          <LabelAndInput>
            <Label>Email address</Label>
            <Input
              type="email"
              placeholder="What's your email?"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </LabelAndInput>

          <LabelAndInput>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="We promise not to peek 👀"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </LabelAndInput>

          <CheckboxAndText>
            <Checkbox type="checkbox" />
            <Paragraph regular>Remember me</Paragraph>
          </CheckboxAndText>

          <LoginAndRegister>
            {loading ? (
              <LoginButton disabled>Loading ...</LoginButton>
            ) : (
              <LoginButton type="submit">Log in</LoginButton>
            )}
            <Link
              to={
                redirect
                  ? `/register?redirect=${redirect}`
                  : routeURL.auth.register
              }
            >
              <Paragraph light>Create an account</Paragraph>
            </Link>
          </LoginAndRegister>

        </Form>
        
      </LoginFormStyles>
    </>
  );
}

export default LoginForm;
