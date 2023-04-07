import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../../../loading/Loading.component";
import Message from "../../../../message/Message.component";

import { getUserProfile, updateUserProfile, updateUserProfileReset } from "../../../../../redux/actions/userActions";

import { useNavigate } from "react-router-dom";

import { ProfileFormStyles, MyProfile, MyOrders } from "./ProfileForm.styles";

import {
  Form,
  Header,
  LabelAndInput,
  Label,
  Input,
  LoginAndRegister,
} from "../../../../inputs/formInputs/FormInputs.styles";

import { AddToCartButton as RegisterButton } from "../../../../buttons/Buttons";

import { routeURL } from "../../../../../api/api";

function ProfileForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { error, loading, user } = useSelector((state) => state.userProfile);

  // Check if user is logged in
  const { userInfo } = useSelector((state) => state.userLogin);

  // Check if updateProfile returned success and  re-rendender for useEffect
  const { loading: updateLoading, error: updateError, success } = useSelector((state) => state.userUpdateProfile);

  useEffect(() => {
    if (!userInfo) {

      navigate(routeURL.auth.login);

    } else {
      if (!user || !user.name || success) {

        // Reset userProfile
        dispatch(updateUserProfileReset());

        dispatch(getUserProfile("profile"));

      } else {
        setName(user.name);
        setSurname(user.surname);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, success, user, userInfo]);

  const updateHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {

      setMessage("Your memorable passwords are different 😭");

    } else {
      
      setMessage("");

      dispatch(
        updateUserProfile({
          id: user._id,
          name: name,
          surname: surname,
          email: email,
          password: password,
        })
      );
    }
  };

  return (
    <>
      {message && <Message>{message}</Message>}
      {error && <Message>{error}</Message>}
      {loading && <Loading />}
      <ProfileFormStyles>
        <MyProfile>
          <Form onSubmit={updateHandler}>
            <Header>My Profile</Header>
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
                placeholder="Please Update your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                id="password"
              />
            </LabelAndInput>

            <LabelAndInput>
              <Label>Confirm Password</Label>
              <Input
                type="password"
                placeholder="Confirm your updated password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                id="confirmPassword"
              />
            </LabelAndInput>
            <LoginAndRegister>
              {updateLoading ? (
                <RegisterButton type="submit">Updating ...</RegisterButton>
              ) : updateError ? (
                <RegisterButton type="submit">Error Updating</RegisterButton>
              ) : (
                <RegisterButton type="submit">Update</RegisterButton>
              )}
            </LoginAndRegister>
          </Form>
        </MyProfile>

        <MyOrders>
          <Form>
            <Header>My Orders</Header>
          </Form>
        </MyOrders>
      </ProfileFormStyles>
    </>
  );
}

export default ProfileForm;
