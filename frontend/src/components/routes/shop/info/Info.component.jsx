import { InfoStyles, InfoText, InfoHeader, InfoParagraph } from "./Info.styles";

function Info() {
  return (
    <InfoStyles>
      <InfoText>
        <InfoHeader>Free Delivery</InfoHeader>
        <InfoParagraph>For all oders over $50, consectetur</InfoParagraph>
        <InfoParagraph>adipim scing elit.</InfoParagraph>
      </InfoText>

      <InfoText>
        <InfoHeader>90 Days Return</InfoHeader>
        <InfoParagraph>If goods have problems, consectetur</InfoParagraph>
        <InfoParagraph>adipim scing elit.</InfoParagraph>
      </InfoText>

      <InfoText>
        <InfoHeader>Secure Payment</InfoHeader>
        <InfoParagraph>100% secure payment, consectetur </InfoParagraph>
        <InfoParagraph>adipim scing elit.</InfoParagraph>
      </InfoText>
    </InfoStyles>
  );
}

export default Info;
