import { MessageStyles, MessageText } from "./Message.styles";

function Message({ children }) {
  return (
       <MessageStyles>
         <MessageText>{children}</MessageText>  
       </MessageStyles>  
  )
}

export default Message;