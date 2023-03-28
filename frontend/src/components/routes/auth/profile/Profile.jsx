import Banner from "../../../banner/Banner.component";
import ProfileForm from "./profileForm/ProfileForm.component";
import Info from "../../../info/Info.component";

function Profile() {
  return (
    <>
      <Banner header="Profile" route="Profile" />
      <ProfileForm />
      <Info />
    </>
  );
}

export default Profile;
