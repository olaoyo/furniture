import { MessageText } from "./Message.styles";

function Message({ children }) {
  return (
       <MessageText>{children}</MessageText>    
  )
}

export default Message;