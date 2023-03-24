import { useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";

import { ActivityIndicator } from "react-native";
import Message from "../../../message/Message.component";

import { AuthButton } from "../../../buttons/Buttons";

import {
  AuthBackground,
  AuthCover,
  AuthCard,
  AccountStyles,
} from "./Account.styles";

import {
  Form,
  TextInfo,
  InputCard,
  AuthInput,
  ErrorContainer,
  LoginAndRegister,
} from "../../../inputs/formInputs/FormInputs.styles";

import Spacer from "../../../utils/spacer/Spacer.styles";

function Account() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const { loading, user } = useSelector((state) => state.userProfile);

  // Set text updates from db user profile
  useLayoutEffect(() => {
    if (user && user.name) {
      setName(user.name)
      setSurname(user.surname)
      setEmail(user.email)
    }
  }, [user]);
  
  const updateHandler = () => {
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

    if (password !== confirmPassword) {
      setMessage("Your memorable passwords are different 😭");
      return
    }
    
    else {
      console.log("Updating...");
    }
  };


  return (
    <>
      <AuthBackground>
        <AuthCover />
        <AuthCard>
          <AccountStyles>
            <Form>
              <InputCard>
                {message.length ? (
                  <>
                    <TextInfo header>Update Your Profile</TextInfo>

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
                      placeholder="Please Update your password"
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
                      placeholder="Confirm your updated password"
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
                        icon="account-edit-outline"
                        mode="contained"
                        onPress={updateHandler}
                      >
                        Update
                      </AuthButton>
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
                    <TextInfo header>Update Your Profile</TextInfo>

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
                      placeholder="Please Update your password"
                      textContentType="password"
                      secureTextEntry
                      secure
                      onChangeText={(password) => setPassword(password)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      label="Confirm Password"
                      value={confirmPassword}
                      placeholder="Confirm your updated password"
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
                        icon="account-edit-outline"
                        mode="contained"
                        onPress={updateHandler}
                      >
                        Update
                      </AuthButton>
                    </LoginAndRegister>
                  </>
                )}

                <Spacer verticalOne />
              </InputCard>
            </Form>
          </AccountStyles>
        </AuthCard>
      </AuthBackground>
    </>
  );
}

export default Account;
