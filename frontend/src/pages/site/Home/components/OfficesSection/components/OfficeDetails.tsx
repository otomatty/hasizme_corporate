import type { Office } from "@/types/offices";

interface OfficeDetailsProps {
	office: Office;
}

const OfficeDetails = ({ office }: OfficeDetailsProps) => {
	return (
		<div className="flex-auto bg-white rounded-lg shadow-lg">
			{office.imageUrl && (
				<img
					src={office.imageUrl}
					alt={`${office.name}の画像`}
					className="w-full h-80 object-cover rounded-t-lg mb-4"
				/>
			)}
			<div className="p-6">
				<h3 className="text-2xl font-bold mb-4">{office.name}</h3>
				<div className="space-y-4">
					<div className="flex items-start gap-2">
						<span className="text-xl">📍</span>
						<div>
							<p className="text-gray-600">住所：</p>
							<p>{office.address}</p>
						</div>
					</div>
					<div className="flex items-start gap-2">
						<span className="text-xl">📞</span>
						<div>
							<p className="text-gray-600">電話番号：</p>
							<a
								href={`tel:${office.phone}`}
								className="text-primary hover:underline"
							>
								{office.phone}
							</a>
						</div>
					</div>
					<div className="flex items-start gap-2">
						<span className="text-xl">📠</span>
						<div>
							<p className="text-gray-600">FAX：</p>
							<p>{office.fax}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OfficeDetails;
