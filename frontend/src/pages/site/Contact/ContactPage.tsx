import { useState, type FormEvent, type ChangeEvent } from "react";
import Hero from "@/components/site/Hero/Hero";

interface ContactFormData {
	name: string;
	email: string;
	message: string;
}

export default function ContactPage() {
	const [form, setForm] = useState<ContactFormData>({
		name: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState<Partial<ContactFormData>>({});

	const validateForm = () => {
		const newErrors: Partial<ContactFormData> = {};
		if (!form.name) newErrors.name = "名前を入力してください";
		if (!form.email) newErrors.email = "メールアドレスを入力してください";
		if (!form.message) newErrors.message = "メッセージを入力してください";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (validateForm()) {
			console.log("Form submitted:", form);
			alert("お問い合わせありがとうございます。");
		}
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { id, value } = e.target;
		setForm((prev) => ({ ...prev, [id]: value }));
	};

	return (
		<>
			<Hero title="お問い合わせ" />
			<div className="max-w-2xl mx-auto px-4 py-8">
				<div className="bg-white rounded-lg shadow-md p-6">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-2">
							<label htmlFor="name" className="block font-medium text-gray-700">
								お名前
							</label>
							<input
								type="text"
								id="name"
								value={form.name}
								onChange={handleChange}
								className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
								required
							/>
							{errors.name && (
								<p className="text-red-600 text-sm">{errors.name}</p>
							)}
						</div>

						<div className="space-y-2">
							<label
								htmlFor="email"
								className="block font-medium text-gray-700"
							>
								メールアドレス
							</label>
							<input
								type="email"
								id="email"
								value={form.email}
								onChange={handleChange}
								className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
								required
							/>
							{errors.email && (
								<p className="text-red-600 text-sm">{errors.email}</p>
							)}
						</div>

						<div className="space-y-2">
							<label
								htmlFor="message"
								className="block font-medium text-gray-700"
							>
								メッセージ
							</label>
							<textarea
								id="message"
								value={form.message}
								onChange={handleChange}
								rows={5}
								className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-y"
								required
							/>
							{errors.message && (
								<p className="text-red-600 text-sm">{errors.message}</p>
							)}
						</div>

						<button
							type="submit"
							className="w-full px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-200"
						>
							送信
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
