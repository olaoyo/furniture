import Banner from "../../../banner/Banner.component";
import ProfileForm from "./profileForm/ProfileForm.component";

function Profile() {
  return (
    <>
      <Banner header="Profile" route="Profile" />
      <ProfileForm />
    </>
  );
}

export default Profile;
