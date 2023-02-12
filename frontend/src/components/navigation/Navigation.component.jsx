import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/themes/themes";
import Layout from "../../styles/layout/Layout.component";
import GlobalStyles from "../../styles/global/GlobalStyles";
import Header from "../navigation/header/Header.component";
import Footer from "./footer/Footer.components";

function Navigation() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Header />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default Navigation;
