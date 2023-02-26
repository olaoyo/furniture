import { LoadingStyles, LoadingSpinner, LoadingText } from "./Loading.styles";

function Loading() {
  return (
    <LoadingStyles>
       <LoadingSpinner /> 
       <LoadingText>Loading</LoadingText>
    </LoadingStyles>
  )
}

export default Loading;