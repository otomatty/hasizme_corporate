import { Router, Route } from "@solidjs/router";
import { createSignal, onMount, onCleanup } from "solid-js";
// 共通コンポーネント
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {
  SlideInMenuContainer,
  SlideInMenuOverlay,
  CloseButton,
} from "./components/Header/Header.styled";
import Navbar from "./components/Navbar/Navbar";
import { menuItems } from "./data/menuItemsData";
import { MobileContactButtons } from "./components/ContactButtons/ContactButtons";
// ページコンポーネント
import Home from "./pages/Home/Home";
// 会社情報
import AboutUs from "./pages/AboutUs/AboutUs";
import CompanyProfile from "./pages/CompanyProfile/CompanyProfile";
import OrganizationChart from "./pages/OrganizationChart/OrganizationChart";
import History from "./pages/History/History";
import PostDisasterJourney from "./pages/PostDisasterJourney/PostDisasterJourney";
// 事業紹介
import Services from "./pages/Services/Services";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
// 商品紹介
import Products from "./pages/Products/Products";
// お知らせ
import News from "./pages/News/News";
import NewsDetail from "./pages/NewsDetail/NewsDetail";
// 採用情報
import Careers from "./pages/Careers/Careers";
// 橋爪倶楽部（オウンドメディア）
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
// import CategoryPosts from "./pages/CategoryPosts/CategoryPosts";
// 事業所情報
import Offices from "./pages/Offices/Offices";
// CSR活動
import CSR from "./pages/CSR/CSR";
import CSRDetail from "./pages/CSRDetail/CSRDetail";
// よくある質問
import FAQ from "./pages/FAQ/FAQ";
// お問い合わせ
import Contact from "./pages/Contact/Contact";
// 資料請求
import RequestMaterials from "./pages/RequestMaterials/RequestMaterials";

import "./App.css";

const App = (props: { children?: any }) => {
  const [mainMarginTop, setMainMarginTop] = createSignal(0);
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [isMobile, setIsMobile] = createSignal(window.innerWidth <= 1200);
  const [activeMenu, setActiveMenu] = createSignal<string | null>(null);

  const setHeaderHeight = (height: number) => {
    setMainMarginTop(height);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1200);
    if (window.innerWidth > 1200) {
      setIsMenuOpen(false);
    }
  };

  onMount(() => {
    window.addEventListener("resize", handleResize);
  });

  onCleanup(() => {
    window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      <Header setHeaderHeight={setHeaderHeight} toggleMenu={toggleMenu} />
      <SlideInMenuOverlay
        isOpen={isMenuOpen()}
        onClick={() => setIsMenuOpen(false)}
      />
      <SlideInMenuContainer isOpen={isMenuOpen()}>
        <CloseButton onClick={() => setIsMenuOpen(false)}>&times;</CloseButton>
        <Navbar
          menuItems={menuItems}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          isMobile={isMobile}
          closeMenu={() => setIsMenuOpen(false)}
        />
        <MobileContactButtons />
      </SlideInMenuContainer>
      <main style={{ "margin-top": `${mainMarginTop()}px` }}>
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
        <Route path="/post-disaster-journey" component={PostDisasterJourney} />
      </Route>
      <Route path="/services">
        <Route path="/" component={Services} />
        <Route path="/:id" component={ServiceDetail} />
      </Route>
      <Route path="/products" component={Products} />
      <Route path="/news">
        <Route path="/" component={News} />
        <Route path="/:slug" component={NewsDetail} />
      </Route>
      <Route path="/careers" component={Careers} />
      <Route path="/blog">
        <Route path="/" component={Blog} />
        <Route path="/:slug" component={BlogPost} />
      </Route>
      {/* カテゴリーごとの記事一覧 */}
      {/* 現時点でカテゴリーはないのでコメントアウト */}
      {/* <Route path="/category/:slug" component={CategoryPosts} /> */}
      <Route path="/offices" component={Offices} />
      <Route path="/csr">
        <Route path="/" component={CSR} />
        <Route path="/:id" component={CSRDetail} />
      </Route>
      <Route path="/faq" component={FAQ} />
      <Route path="/contact">
        <Route path="/" component={Contact} />
      </Route>
      <Route path="/request-materials" component={RequestMaterials} />
    </Router>
  );
}

export default AppWrapper;
