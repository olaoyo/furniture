import { ActivityIndicator } from "react-native";

import Message from "../../../message/Message.component";
import { theme } from "../../../../themes/themes";

import { DescriptionStyles, DescriptionInfo } from "./Description.styles";

function Description({ loading, furniture: { description }, error }) {
  return (
    <DescriptionStyles>
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.yellow} />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <DescriptionInfo>{description}</DescriptionInfo>
      )}
    </DescriptionStyles>
  );
}

export default Description;
