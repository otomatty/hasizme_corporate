import { Link } from "react-router-dom";
import Container from "@/components/site/Container/Container";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-800 text-white py-12 pb-4">
			<Container>
				<div className="flex flex-wrap justify-around max-w-6xl mx-auto">
					<div className="mb-8">
						<h3 className="text-lg font-bold mb-4">会社情報</h3>
						<div className="flex flex-col gap-2">
							<Link
								to="/about-us"
								className="text-gray-300 hover:text-white transition-colors"
							>
								会社概要
							</Link>
							<Link
								to="/mission"
								className="text-gray-300 hover:text-white transition-colors"
							>
								企業理念
							</Link>
							<Link
								to="/history"
								className="text-gray-300 hover:text-white transition-colors"
							>
								沿革
							</Link>
							<Link
								to="/csr"
								className="text-gray-300 hover:text-white transition-colors"
							>
								CSR活動
							</Link>
						</div>
					</div>

					<div className="mb-8">
						<h3 className="text-lg font-bold mb-4">事業内容</h3>
						<div className="flex flex-col gap-2">
							<Link
								to="/services"
								className="text-gray-300 hover:text-white transition-colors"
							>
								サービス一覧
							</Link>
							<Link
								to="/products"
								className="text-gray-300 hover:text-white transition-colors"
							>
								製品情報
							</Link>
							<Link
								to="/case-studies"
								className="text-gray-300 hover:text-white transition-colors"
							>
								導入事例
							</Link>
						</div>
					</div>

					<div className="mb-8">
						<h3 className="text-lg font-bold mb-4">採用情報</h3>
						<div className="flex flex-col gap-2">
							<Link
								to="/careers"
								className="text-gray-300 hover:text-white transition-colors"
							>
								採用情報
							</Link>
							<Link
								to="/internship"
								className="text-gray-300 hover:text-white transition-colors"
							>
								インターンシップ
							</Link>
						</div>
					</div>

					<div className="mb-8">
						<h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
						<div className="flex flex-col gap-2">
							<Link
								to="/contact"
								className="text-gray-300 hover:text-white transition-colors"
							>
								お問い合わせフォーム
							</Link>
							<a
								href="tel:+81-3-1234-5678"
								className="text-gray-300 hover:text-white transition-colors"
							>
								TEL: 03-1234-5678
							</a>
							<a
								href="mailto:info@example.com"
								className="text-gray-300 hover:text-white transition-colors"
							>
								Email: info@example.com
							</a>
						</div>
					</div>
				</div>

				<div className="text-center mt-8 pt-4 border-t border-gray-700">
					<p>&copy; {currentYear} 橋爪商事株式会社. All rights reserved.</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
