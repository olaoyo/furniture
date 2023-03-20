import { useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { ActivityIndicator } from "react-native";
import Message from "../../../../message/Message.component";

import { register } from "../../../../../redux/actions/userActions";

import { AuthButton } from "../../../../buttons/Buttons";

import {
  AuthBackground,
  AuthCover,
  AuthCard,
  RegisterFormStyles,
} from "./RegisterForm.styles";

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

function RegisterForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const { navigate } = useNavigation();

  const { loading, userInfo } = useSelector(
    (state) => state.userRegister
  );

  // If user is logged in, redirect
  useLayoutEffect(() => {
    if (userInfo) {
      navigate("BottomTabs", {
        screen: "Home",
      });
    }
  }, [navigate, userInfo]);


  
  const registerHandler = () => {
    if (name === "") {
      setMessage("Invalid name. Please check the form and try again");
      return
    }

    if (surname === "") {
      setMessage("Invalid surname. Please check the form and try again");
      return
    }

    if (email === "" || !email.includes("@")) {
      setMessage("Invalid email. Please check the form and try again");
      return
    }

    if (password.length < 6) {
      setMessage("Weak password. Please check the form and try again");
      return
    }

    if (password !== confirmPassword) {
      setMessage("Your memorable passwords are different 😭");
      return
    }
    
    else {
      dispatch(register(name, surname, email, password));
    }
  };

  const loginHandler = () => {
    navigate("Login");
  };

  return (
    <>
      <AuthBackground>
        <AuthCover />
        <AuthCard>
          <RegisterFormStyles>
            <Form>
              <InputCard>
                {message.length ? (
                  <>
                    <TextInfo header>Create an Account</TextInfo>

                    <Spacer verticalOne />

                    <AuthInput
                      error
                      label="Name"
                      value={name}
                      placeholder="What's your first name"
                      textContextType="text"
                      keyboardType="text"
                      autoCapitalize
                      onChangeText={(name) => setName(name)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      error
                      label="Surname"
                      value={surname}
                      placeholder="What's your last name"
                      textContextType="text"
                      keyboardType="text"
                      autoCapitalize
                      onChangeText={(surname) => setSurname(surname)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      error
                      label="E-mail"
                      value={email}
                      placeholder="Please select your unique email"
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
                      placeholder="Please choose a memorable password"
                      textContentType="password"
                      secureTextEntry
                      secure
                      onChangeText={(password) => setPassword(password)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      error
                      label="Confirm Password"
                      value={confirmPassword}
                      placeholder="Confirm your memorable password"
                      textContentType="password"
                      secureTextEntry
                      secure
                      onChangeText={(confirmPassword) =>
                        setConfirmPassword(confirmPassword)
                      }
                    />

                    <Spacer verticalOne />

                    <LoginAndRegister>
                      <AuthButton
                        border
                        icon="account-lock-open-outline"
                        mode="contained"
                        onPress={registerHandler}
                      >
                        Sign Up
                      </AuthButton>

                      <Spacer horizontalOne />

                      <TextTouch onPress={loginHandler} activeOpacity={0.4}>
                        <TextInfo button>Got an account? Login</TextInfo>
                      </TextTouch>
                    </LoginAndRegister>
                    {message.length && (
                      <ErrorContainer>
                        <TextInfo error>{message}</TextInfo>
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
                    <TextInfo header>Create an Account</TextInfo>

                    <Spacer verticalOne />

                    <AuthInput
                      label="Name"
                      value={name}
                      placeholder="What's your first name"
                      textContextType="text"
                      keyboardType="text"
                      autoCapitalize
                      onChangeText={(name) => setName(name)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      label="Surname"
                      value={surname}
                      placeholder="What's your last name"
                      textContextType="text"
                      keyboardType="text"
                      autoCapitalize
                      onChangeText={(surname) => setSurname(surname)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      label="E-mail"
                      value={email}
                      placeholder="Please select your unique email"
                      textContextType="emailAddress"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      onChangeText={(email) => setEmail(email)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      label="Password"
                      value={password}
                      placeholder="Please choose a memorable password"
                      textContentType="password"
                      secureTextEntry
                      secure
                      onChangeText={(password) => setPassword(password)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      label="Confirm Password"
                      value={confirmPassword}
                      placeholder="Confirm your memorable password"
                      textContentType="password"
                      secureTextEntry
                      secure
                      onChangeText={(confirmPassword) =>
                        setConfirmPassword(confirmPassword)
                      }
                    />

                    <Spacer verticalOne />

                    <LoginAndRegister>
                      <AuthButton
                        border
                        icon="account-lock-open-outline"
                        mode="contained"
                        onPress={registerHandler}
                      >
                        Sign Up
                      </AuthButton>

                      <Spacer horizontalOne />

                      <TextTouch onPress={loginHandler} activeOpacity={0.4}>
                        <TextInfo button>Got an account? Login</TextInfo>
                      </TextTouch>
                    </LoginAndRegister>
                  </>
                )}

                <Spacer verticalOne />
              </InputCard>
            </Form>
          </RegisterFormStyles>
        </AuthCard>
      </AuthBackground>
    </>
  );
}

export default RegisterForm;
