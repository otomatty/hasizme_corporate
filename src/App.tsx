import { Router, Route } from "@solidjs/router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import CSRDetail from "./pages/CSRDetail/CSRDetail";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import News from "./pages/News/News";
import ContactUs from "./pages/ContactUs/ContactUs";
import Careers from "./pages/Careers/Careers";
import Blog from "./pages/Blog/Blog";
import Offices from "./pages/Offices/Offices";
import CSR from "./pages/CSR/CSR";
import "./App.css";

const App = (props: { children?: any }) => (
  <>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </>
);

function AppWrapper() {
  return (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/csr/:id" component={CSRDetail} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/services" component={Services} />
      <Route path="/products" component={Products} />
      <Route path="/news" component={News} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/careers" component={Careers} />
      <Route path="/blog" component={Blog} />
      <Route path="/offices" component={Offices} />
      <Route path="/csr" component={CSR} />
    </Router>
  );
}

export default AppWrapper;
