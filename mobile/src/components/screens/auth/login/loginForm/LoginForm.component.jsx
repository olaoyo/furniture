import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { ActivityIndicator } from "react-native";
import Message from "../../../../message/Message.component";

import { login } from "../../../../../redux/actions/userActions";

import { AuthButton } from "../../../../buttons/Buttons";

import {
  AuthBackground,
  AuthCover,
  AuthCard,
  LoginFormStyles,
} from "./LoginForm.styles";

import {
  Form,
  TextInfo,
  InputCard,
  AuthInput,
  TextTouch,
  ErrorContainer,
  LoginAndRegister,
} from "../../../../inputs/formInputs/FormInputs.styles";

import Spacer from "../../../../utils/spacer/Spacer.styles";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { navigate } = useNavigation();

  const { error, loading } = useSelector((state) => state.userLogin);

  const submitHandler = () => {
    dispatch(login(email, password));
  };

  const registerHandler = () => {
    navigate("Register");
  };

  return (
    <>
      <AuthBackground>
        <AuthCover />
        <AuthCard>
          <LoginFormStyles>
            <Form>
              <InputCard>
                {error ? (
                  <>
                    <TextInfo header>Log In</TextInfo>

                    <Spacer verticalOne />

                    <AuthInput
                      error
                      label="E-mail"
                      value={email}
                      placeholder="What's your email?"
                      style={["red"]}
                      textContextType="emailAddress"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      onChangeText={(email) => setEmail(email)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      error
                      label="Password"
                      value={password}
                      placeholder="We promise not to peek 👀"
                      textContentType="password"
                      secureTextEntry
                      secure
                      onChangeText={(password) => setPassword(password)}
                    />

                    <Spacer verticalOne />

                    <LoginAndRegister>
                      <AuthButton
                        border
                        icon="lock-open-outline"
                        mode="contained"
                        onPress={submitHandler}
                      >
                        Log in
                      </AuthButton>

                      <Spacer horizontalOne />

                      <TextTouch onPress={registerHandler} activeOpacity={0.4}>
                        <TextInfo button>Create an account</TextInfo>
                      </TextTouch>
                    </LoginAndRegister>
                    {error && (
                      <ErrorContainer>
                        <TextInfo error>{error}</TextInfo>
                      </ErrorContainer>
                    )}
                  </>
                ) : loading ? (
                  <>
                    <ActivityIndicator size="large" />

                    <Message>Loading...</Message>
                  </>
                ) : (
                  <>
                    <TextInfo header>Log In</TextInfo>

                    <Spacer verticalOne />

                    <AuthInput
                      label="E-mail"
                      value={email}
                      placeholder="What's your email?"
                      style={["red"]}
                      textContextType="emailAddress"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      onChangeText={(email) => setEmail(email)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      label="Password"
                      value={password}
                      placeholder="We promise not to peek 👀"
                      textContentType="password"
                      secureTextEntry
                      secure
                      onChangeText={(password) => setPassword(password)}
                    />

                    <Spacer verticalOne />

                    <LoginAndRegister>
                      <AuthButton
                        border
                        icon="lock-open-outline"
                        mode="contained"
                        onPress={submitHandler}
                      >
                        Log in
                      </AuthButton>

                      <Spacer horizontalOne />

                      <TextTouch onPress={registerHandler} activeOpacity={0.4}>
                        <TextInfo button>Create an account</TextInfo>
                      </TextTouch>
                    </LoginAndRegister>
                    {error && (
                      <ErrorContainer>
                        <TextInfo error>{error}</TextInfo>
                      </ErrorContainer>
                    )}
                  </>
                )}

                <Spacer verticalOne />

              </InputCard>
            </Form>
          </LoginFormStyles>
        </AuthCard>
      </AuthBackground>
    </>
  );
}

export default LoginForm;
