import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@/components/ui/table";

const BusinessContentSection = () => {
	return (
		<section className="mb-12">
			<h2 className="text-2xl text-gray-700 mb-6 border-b-2 border-gray-200 pb-2">
				主な事業内容
			</h2>
			<Table>
				<TableBody>
					<TableRow>
						<TableHead className="text-center w-[50px] align-top">1</TableHead>
						<TableCell>
							次の資材の仕入及び販売
							<ul className="list-none pl-0 mt-2 space-y-2">
								<li className="pl-6 relative">
									（1）鉄鋼、非金属及びそれらの製品
								</li>
								<li className="pl-6 relative">
									（2）セメント、生コン、コンクリート製品、骨材及びそれらの関連製品
								</li>
								<li className="pl-6 relative">
									（3）鉄鋼二次製品、配管他機械、器具、工具、 電動機及び雑貨
								</li>
								<li className="pl-6 relative">
									（4）橋梁・河川・港湾用材、 造園材及び公園施設
								</li>
								<li className="pl-6 relative">
									（5）道路用材、上下水道用材、一般土木用材
								</li>
								<li className="pl-6 relative">
									（6）防水材、屋根材、 左官材、仕上げ塗材、建具及び金具、床材、
									合板、内外装材
								</li>
								<li className="pl-6 relative">
									（7）ガラス、室内装飾材、 車庫、外構用材
								</li>
								<li className="pl-6 relative">
									（8）保温・保冷材、ボイラー、 空調機器ポンプ
								</li>
								<li className="pl-6 relative">（9）排水金具、衛生器材、浴槽</li>
								<li className="pl-6 relative">
									（10）防災・体育関連資材、医療・福祉用機材(AED)
									<br />
									高度管理医療機器等販売業･貸与業…大保第65号
								</li>
								<li className="pl-6 relative">
									（11）工業薬品（毒物、劇物、アルコール他）
									<br />
									毒物劇物一般販売業…大保般129号、他12件
									<br />
									化学製品及びそれらの原料
								</li>
								<li className="pl-6 relative">
									（12）農畜産及び水産資材及びそれらの原料
									<br />
									農薬販売、病防第6-125号、他11件
								</li>
								<li className="pl-6 relative">
									（13）肥料及びそれらの原料
									<br />
									肥料販売業、岩手県知事農普533号
								</li>
								<li className="pl-6 relative">（14）スチール家具及びOA 機器</li>
								<li className="pl-6 relative">（15） プレハブ及び仮設ハウス</li>
							</ul>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="text-center w-[50px] align-top">2</TableHead>
						<TableCell>仮設材の賃貸借及び工事請負</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="text-center w-[50px] align-top">3</TableHead>
						<TableCell>外構、内装、屋根他工事請負</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="text-center w-[50px] align-top">4</TableHead>
						<TableCell>各種製作物件及び据付工事請負</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="text-center w-[50px] align-top">5</TableHead>
						<TableCell>
							土木、一般建築工事請負
							<br />
							建設業（土木、建築）岩手県知事（般-2）-2397号
						</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="text-center w-[50px] align-top">6</TableHead>
						<TableCell>ガラス加工、サッシ組立据付工事及び請負</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="text-center w-[50px] align-top">7</TableHead>
						<TableCell>
							産業廃棄物処収集運搬業
							<ul className="list-none pl-0 mt-2 space-y-2">
								<li className="pl-6 relative">
									岩手県知事許可番号　00315012304
								</li>
								<li className="pl-6 relative">
									秋田県知事許可番号　00519012304
								</li>
								<li className="pl-6 relative">
									宮城県知事許可番号　00400012304
								</li>
								<li className="pl-6 relative">
									青森県知事許可番号　00211012304
								</li>
							</ul>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="text-center w-[50px] align-top">8</TableHead>
						<TableCell>
							特別管理産業廃棄物収集運搬業
							<ul className="list-none pl-0 mt-2 space-y-2">
								<li className="pl-6 relative">
									岩手県知事許可番号　00365012304
								</li>
								<li className="pl-6 relative">
									秋田県知事許可番号　00566012304
								</li>
								<li className="pl-6 relative">
									宮城県知事許可番号　00450012304
								</li>
								<li className="pl-6 relative">
									青森県知事許可番号　00261012304
								</li>
							</ul>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="text-center w-[50px] align-top">9</TableHead>
						<TableCell>前項に付帯又は関連する一切の事業</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</section>
	);
};

export default BusinessContentSection;
