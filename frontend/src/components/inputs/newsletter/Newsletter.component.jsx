import { NewsletterStyles,NewsletterInput, NewsletterButton } from "./Newsletter.styles";


function Newsletter() {
  return (
    <NewsletterStyles>
        <NewsletterInput type="email" placeholder="Enter Your Email Address" />
        <NewsletterButton>subscribe</NewsletterButton>
    </NewsletterStyles>
  )
}

export default Newsletter
