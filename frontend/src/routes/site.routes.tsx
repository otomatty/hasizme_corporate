import type { RouteObject } from "react-router-dom";
import Home from "@/pages/site/Home/HomePage";
import AboutUs from "@/pages/site/AboutUs/AboutUsPage";
import CompanyProfile from "@/pages/site/CompanyProfile/CompanyProfilePage";
import OrganizationChart from "@/pages/site/OrganizationChart/OrganizationChartPage";
import History from "@/pages/site/History/HistoryPage";
import PostDisasterJourney from "@/pages/site/PostDisasterJourney/PostDisasterJourneyPage";
import Services from "@/pages/site/Services/ServicesPage";
import ServiceDetail from "@/pages/site/ServiceDetail/ServiceDetailPage";
import Products from "@/pages/site/Products/ProductsPage";
import News from "@/pages/site/News/NewsPage";
import NewsDetail from "@/pages/site/News/NewsDetailPage";
import Careers from "@/pages/site/Careers/CareersPage";
import Blog from "@/pages/site/Blog/BlogPage";
import BlogPost from "@/pages/site/Blog/BlogPostPage";
import Offices from "@/pages/site/Offices/OfficesPage";
import CSR from "@/pages/site/CSR/CSRPage";
import CSRDetail from "@/pages/site/CSR/CSRDetailPage";
import FAQ from "@/pages/site/FAQ/FAQPage";
import Contact from "@/pages/site/Contact/ContactPage";
import RequestMaterials from "@/pages/site/RequestMaterials/RequestMaterialsPage";

export const siteRoutes: RouteObject[] = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "about-us",
		children: [
			{ path: "", element: <AboutUs /> },
			{ path: "company-profile", element: <CompanyProfile /> },
			{ path: "organization", element: <OrganizationChart /> },
			{ path: "history", element: <History /> },
			{ path: "post-disaster-journey", element: <PostDisasterJourney /> },
		],
	},
	{
		path: "services",
		children: [
			{ path: "", element: <Services /> },
			{ path: ":id", element: <ServiceDetail /> },
		],
	},
	{
		path: "products",
		element: <Products />,
	},
	{
		path: "news",
		children: [
			{ path: "", element: <News /> },
			{ path: ":slug", element: <NewsDetail /> },
		],
	},
	{
		path: "careers",
		element: <Careers />,
	},
	{
		path: "blog",
		children: [
			{ path: "", element: <Blog /> },
			{ path: ":slug", element: <BlogPost /> },
		],
	},
	{
		path: "offices",
		element: <Offices />,
	},
	{
		path: "csr",
		children: [
			{ path: "", element: <CSR /> },
			{ path: ":id", element: <CSRDetail /> },
		],
	},
	{
		path: "faq",
		element: <FAQ />,
	},
	{
		path: "contact",
		element: <Contact />,
	},
	{
		path: "request-materials",
		element: <RequestMaterials />,
	},
];
