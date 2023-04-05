import { MessageStyles, MessageText } from "./Message.styles";

function Message({ children, smallGold }) {
  return (
       <MessageStyles smallGold={smallGold}>
         <MessageText smallGold={smallGold}>{children}</MessageText>  
       </MessageStyles>  
  )
}

export default Message;