import { Router, Route } from '@solidjs/router';
import { createSignal } from 'solid-js';
// 共通コンポーネント
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// ページコンポーネント
import Home from './pages/Home/Home';
// 会社情報
import AboutUs from './pages/AboutUs/AboutUs';
import CompanyProfile from './pages/CompanyProfile/CompanyProfile';
import OrganizationChart from './pages/OrganizationChart/OrganizationChart';
import History from './pages/History/History';
// 事業紹介
import Services from './pages/Services/Services';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
// 商品紹介
import Products from './pages/Products/Products';
// お知らせ
import News from './pages/News/News';
// 採用情報
import Careers from './pages/Careers/Careers';
// 橋爪倶楽部（オウンドメディア）
import Blog from './pages/Blog/Blog';
// 事業所情報
import Offices from './pages/Offices/Offices';
// CSR活動
import CSR from './pages/CSR/CSR';
import CSRDetail from './pages/CSRDetail/CSRDetail';
// お問い合わせ
import ContactUs from './pages/ContactUs/ContactUs';

import './App.css';

const App = (props: { children?: any }) => {
  const [mainMarginTop, setMainMarginTop] = createSignal(0);

  const setHeaderHeight = (height: number) => {
    setMainMarginTop(height);
  };

  return (
    <>
      <Header setHeaderHeight={setHeaderHeight} />
      <main style={{ 'margin-top': `${mainMarginTop()}px` }}>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

function AppWrapper() {
  return (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/about-us">
        <Route path="/" component={AboutUs} />
        <Route path="/company-profile" component={CompanyProfile} />
        <Route path="/organization" component={OrganizationChart} />
        <Route path="/history" component={History} />
      </Route>
      <Route path="/services">
        <Route path="/" component={Services} />
        <Route path="/:id" component={ServiceDetail} />
      </Route>
      <Route path="/products" component={Products} />
      <Route path="/news" component={News} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/careers" component={Careers} />
      <Route path="/blog" component={Blog} />
      <Route path="/offices" component={Offices} />
      <Route path="/csr">
        <Route path="/" component={CSR} />
        <Route path="/:id" component={CSRDetail} />
      </Route>
    </Router>
  );
}

export default AppWrapper;
