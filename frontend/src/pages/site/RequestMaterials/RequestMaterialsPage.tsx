import type { FormEvent, ChangeEvent } from "react";
import { useAtom } from "jotai";
import Hero from "@/components/site/Hero/Hero";
import {
	requestFormAtom,
	formErrorsAtom,
	type RequestMaterialsErrors,
} from "@/stores/formStore";

const materials = [
	{
		id: "brochure",
		title: "会社案内パンフレット",
		image: "/images/brochure.jpg",
	},
	{
		id: "product_catalog",
		title: "製品カタログ",
		image: "/images/catalog.jpg",
	},
	{ id: "price_list", title: "価格表", image: "/images/price_list.jpg" },
	{
		id: "technical_specs",
		title: "技術仕様書",
		image: "/images/tech_specs.jpg",
	},
];

export default function RequestMaterialsPage() {
	const [form, setForm] = useAtom(requestFormAtom);
	const [errors, setErrors] = useAtom(formErrorsAtom);

	const validateForm = () => {
		const newErrors: RequestMaterialsErrors = {};
		if (!form.selectedMaterial) newErrors.material = "資料を選択してください";
		if (!form.name) newErrors.name = "名前を入力してください";
		if (!form.email) newErrors.email = "メールアドレスを入力してください";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (validateForm()) {
			console.log("Form submitted:", form);
			alert("資料請求を受け付けました。ありがとうございます。");
			setForm({
				selectedMaterial: "",
				name: "",
				email: "",
				message: "",
			});
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
			<Hero title="資料請求" />
			<div className="max-w-2xl mx-auto px-4 py-8">
				<div className="bg-white rounded-lg shadow-md p-6">
					<h2 className="text-xl font-bold mb-6 text-center">
						請求する資料を選択してください
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
						{materials.map((material) => (
							<button
								key={material.id}
								type="button"
								onClick={() =>
									setForm((prev) => ({
										...prev,
										selectedMaterial: material.id,
									}))
								}
								className={`w-full text-left cursor-pointer rounded-lg overflow-hidden shadow-sm hover:-translate-y-1 transition-all duration-300
                    ${
											form.selectedMaterial === material.id
												? "ring-2 ring-primary"
												: ""
										}`}
							>
								<img
									src={material.image}
									alt={material.title}
									className="w-full h-36 object-cover"
								/>
								<h3 className="p-2 text-center text-sm font-medium">
									{material.title}
								</h3>
							</button>
						))}
					</div>

					{errors.material && (
						<p className="text-red-600 text-sm mb-4">{errors.material}</p>
					)}

					{form.selectedMaterial && (
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="space-y-2">
								<label
									htmlFor="name"
									className="block font-medium text-gray-700"
								>
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
									その他のご要望（任意）
								</label>
								<textarea
									id="message"
									value={form.message}
									onChange={handleChange}
									rows={5}
									className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-y"
								/>
							</div>

							<button
								type="submit"
								className="w-full px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-200"
							>
								資料を請求する
							</button>
						</form>
					)}
				</div>
			</div>
		</>
	);
}
