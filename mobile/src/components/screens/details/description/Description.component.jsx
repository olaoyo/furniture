import { DescriptionStyles, DescriptionInfo } from "./Description.styles"


function Description({ furniture: { description } }) {
  return (
    <DescriptionStyles>
      <DescriptionInfo>{description}</DescriptionInfo>  
    </DescriptionStyles>
  )
}

export default Description