import { useNavigation } from "@react-navigation/native";

import { ProfileButtonsStyles, ButtonGrid } from "./ProfileButtons.styles";

import { AuthButton as ProfileButton } from "../../../buttons/Buttons";


function ProfileButtons({ user }) {
  const { navigate } = useNavigation();

  const accountHander = () => {
    navigate("Account", { user: user });
  };

  const ordersHandler = () => {
    navigate("Orders");
  };

  const keepShoppingHander = () => {
    navigate("BottomTabs", {
      screen: "Furniture",
    });
  };

  const goHomeHandler = () => {
    navigate("BottomTabs", {
      screen: "Home",
    });
  };


  return (
    <ProfileButtonsStyles>
      <ButtonGrid>
        <ProfileButton
          onPress={accountHander}
          icon="account-edit-outline"
          border
        >
          My Account
        </ProfileButton>
        <ProfileButton
          onPress={ordersHandler}
          icon="truck-delivery-outline"
          border
        >
          My Orders
        </ProfileButton>
      </ButtonGrid>
      <ButtonGrid>
        <ProfileButton
          onPress={keepShoppingHander}
          icon="table-furniture"
          border
        >
          Keep Shopping
        </ProfileButton>
        <ProfileButton onPress={goHomeHandler} icon="home-outline" border>
          Go To Home
        </ProfileButton>
      </ButtonGrid>
    </ProfileButtonsStyles>
  );
}

export default ProfileButtons;
