import { Link } from "react-router-dom";

const CompanyInfo = () => {
	return (
		<section className="my-8 text-center w-full max-w-3xl mx-auto">
			<h2 className="text-4xl mb-4 text-gray-800">会社情報</h2>
			<p className="text-xl text-gray-600 mb-4">
				詳細な会社情報については、以下のリンクをご覧ください：
			</p>
			<ul className="mt-4 space-y-2">
				<li>
					<Link
						to="/about-us/company-profile"
						className="text-blue-600 hover:underline"
					>
						会社概要
					</Link>
				</li>
				<li>
					<Link
						to="/about-us/organization"
						className="text-blue-600 hover:underline"
					>
						組織図
					</Link>
				</li>
				<li>
					<Link
						to="/about-us/history"
						className="text-blue-600 hover:underline"
					>
						沿革
					</Link>
				</li>
				<li>
					<Link
						to="/about-us/post-disaster-journey"
						className="text-blue-600 hover:underline"
					>
						震災から今日までの歩み
					</Link>
				</li>
			</ul>
		</section>
	);
};

export default CompanyInfo;
