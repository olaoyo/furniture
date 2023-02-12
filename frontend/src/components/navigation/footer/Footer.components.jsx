import {
    FooterStyles,
    FooterInfo,
    FooterAddressGrid,
    FooterAddress,
    FooterLinks,
    FooterParagraph,
    FooterCopyright,
  } from "./Footer.styles";
  import Newsletter from "../../inputs/newsletter/Newsletter.component";
  
  function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <FooterStyles>
        <FooterInfo>
          <FooterAddressGrid>
            <FooterAddress>400 University Drive Suite 200 Coral</FooterAddress>
            <FooterAddress>Gables,</FooterAddress>
            <FooterAddress>FL 33134 USA</FooterAddress>
          </FooterAddressGrid>
          <FooterLinks>
              <FooterParagraph grey>Links</FooterParagraph>
              <FooterParagraph>Home</FooterParagraph>
              <FooterParagraph>Shop</FooterParagraph>
              <FooterParagraph>About</FooterParagraph>
              <FooterParagraph>Contact</FooterParagraph>
          </FooterLinks>
          <FooterLinks>
              <FooterParagraph grey>Help</FooterParagraph>
              <FooterParagraph>Payment Options</FooterParagraph>
              <FooterParagraph>Returns</FooterParagraph>
              <FooterParagraph>Privacy Policies</FooterParagraph>
          </FooterLinks>
          <FooterLinks>
              <FooterParagraph grey>Newsletter</FooterParagraph>
              <Newsletter />
          </FooterLinks>
        </FooterInfo>
        <FooterCopyright>
          {year} Meubel House. All rights reserved
        </FooterCopyright>
      </FooterStyles>
    );
  }
  
  export default Footer;
  