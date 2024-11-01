import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider as JotaiProvider } from "jotai";
import SiteLayout from "@/layouts/SiteLayout";
import { siteRoutes } from "@/routes/site.routes";

const App = () => {
	return (
		<JotaiProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<SiteLayout />}>
						{siteRoutes.map((route) => (
							<Route key={route.path} path={route.path} element={route.element}>
								{route.children?.map((childRoute) => (
									<Route
										key={childRoute.path}
										path={childRoute.path}
										element={childRoute.element}
									/>
								))}
							</Route>
						))}
					</Route>
				</Routes>
			</BrowserRouter>
		</JotaiProvider>
	);
};

export default App;
