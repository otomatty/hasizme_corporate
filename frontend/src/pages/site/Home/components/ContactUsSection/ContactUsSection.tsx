import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/site/SectionTitle";
import Container from "@/components/site/Container/Container";

const ContactUsSection = () => {
	return (
		<section className="w-full my-16">
			<Container>
				<SectionTitle
					title="お問い合わせ"
					description="お客様のニーズに合わせて、最適なお問い合わせ方法をお選びください。"
				/>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-white p-6 rounded-lg shadow-sm">
						<h3 className="text-xl font-semibold mb-4">一般的なお問い合わせ</h3>
						<p className="text-gray-600 mb-4">
							製品やサービスに関する一般的なご質問はこちらからお願いします。
						</p>
						<Button asChild>
							<Link to="/contact">お問い合わせフォームへ</Link>
						</Button>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-sm">
						<h3 className="text-xl font-semibold mb-4">
							営業に関するお問い合わせ
						</h3>
						<p className="text-gray-600 mb-4">
							製品の購入や見積もりに関するお問い合わせはこちらからお願いします。
						</p>
						<Button asChild>
							<a href="mailto:sales@example.com">営業部門へメール</a>
						</Button>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-sm">
						<h3 className="text-xl font-semibold mb-4">技術サポート</h3>
						<p className="text-gray-600 mb-4">
							製品の技術的なサポートが必要な場合はこちらからお問い合わせください。
						</p>
						<Button asChild>
							<a href="tel:+81-3-1234-5678">サポートへ電話</a>
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default ContactUsSection;
