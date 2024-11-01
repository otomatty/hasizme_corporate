import { useNavigate } from "react-router-dom";
import { Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactButtons() {
	const navigate = useNavigate();

	return (
		<div className="hidden md:flex md:gap-4 md:mr-24 xl:order-1 xl:m-0">
			<Button
				variant="default"
				onClick={() => navigate("/contact")}
				className="gap-2"
			>
				<Mail className="h-4 w-4" />
				お問い合わせ
			</Button>
			{/* <Button
				variant="secondary"
				onClick={() => navigate("/request-materials")}
				className="gap-2"
			>
				<FileText className="h-4 w-4" />
				資料請求
			</Button> */}
		</div>
	);
}

export function MobileContactButtons() {
	const navigate = useNavigate();

	return (
		<div className="hidden xl:flex xl:flex-col xl:gap-4 xl:mt-4">
			<Button
				variant="default"
				onClick={() => navigate("/contact")}
				className="gap-2"
			>
				<Mail className="h-4 w-4" />
				お問い合わせ
			</Button>
			<Button
				variant="secondary"
				onClick={() => navigate("/request-materials")}
				className="gap-2"
			>
				<FileText className="h-4 w-4" />
				資料請求
			</Button>
		</div>
	);
}

export default ContactButtons;
