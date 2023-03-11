import { MessageGrid, MessageText } from "./Message.styles";

function Message({ children }) {
  return (
       <MessageGrid>
         <MessageText>{children}</MessageText>
       </MessageGrid>    
  )
}

export default Message;