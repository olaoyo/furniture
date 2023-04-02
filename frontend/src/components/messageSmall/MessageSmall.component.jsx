import { MessageSmallStyles, MessageSmallText } from "./MessageSmall.styles";

function MessageSmall({ children }) {
  return (
    <MessageSmallStyles>
      <MessageSmallText>{children}</MessageSmallText>
    </MessageSmallStyles>
  );
}

export default MessageSmall;
