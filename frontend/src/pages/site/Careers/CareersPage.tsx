export default function CareersPage() {
	return (
		<div className="flex flex-col items-center px-8 py-8 max-w-7xl mx-auto">
			<h1 className="text-3xl font-bold mb-8">採用情報</h1>

			<section className="w-full mb-12">
				<h2 className="text-2xl font-bold text-primary mb-4">経営方針</h2>
				<p className="text-lg leading-relaxed text-gray-700">
					橋爪商事株式会社は、「信頼と革新」を経営理念に掲げ、お客様と社会に価値を提供し続けることを目指しています。私たちは、持続可能な未来を築くため、環境に配慮した建設技術の開発と、社員一人ひとりの成長を大切にしています。
				</p>
			</section>

			<section className="w-full mb-12">
				<h2 className="text-2xl font-bold text-primary mb-4">事業戦略</h2>
				<p className="text-lg leading-relaxed text-gray-700">
					1. 環境配慮型建設プロジェクトの推進 2.
					デジタル技術を活用した業務効率化 3. グローバル市場への展開 4.
					地域社会との共生と貢献 5. 継続的な人材育成と技術革新
				</p>
			</section>

			<section className="w-full mb-12">
				<h2 className="text-2xl font-bold text-primary mb-4">
					代表者からのメッセージ
				</h2>
				<div className="space-y-4">
					<div className="bg-gray-50 rounded-lg p-6 shadow-sm">
						<h3 className="text-xl font-bold mb-2">
							橋爪 太郎 - 代表取締役社長
						</h3>
						<p className="text-gray-700 italic">
							「私たちは、単なる建設会社ではありません。未来を創造する企業です。あなたの情熱と創造性を、私たちと共に社会に還元しませんか？」
						</p>
					</div>
					<div className="bg-gray-50 rounded-lg p-6 shadow-sm">
						<h3 className="text-xl font-bold mb-2">橋爪 花子 - 取締役副社長</h3>
						<p className="text-gray-700 italic">
							「多様性を尊重し、一人ひとりの個性を活かせる職場環境を目指しています。共に成長し、新しい価値を生み出していきましょう。」
						</p>
					</div>
				</div>
			</section>

			<section className="w-full mb-12">
				<h2 className="text-2xl font-bold text-primary mb-4">会社の歴史</h2>
				<ul className="space-y-4">
					{[
						"1950年 - 橋爪建設として創業",
						"1980年 - 橋爪商事株式会社に社名変更",
						"2000年 - 環境配慮型建設技術の開発開始",
						"2010年 - アジア市場への進出",
						"2020年 - デジタルトランスフォーメーション推進部門設立",
					].map((item) => (
						<li key={item} className="pl-8 relative">
							<div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary" />
							{item}
						</li>
					))}
				</ul>
			</section>

			<section className="w-full mb-12">
				<h2 className="text-2xl font-bold text-primary mb-4">自社のデータ</h2>
				{[
					"従業員数: 1,200名",
					"年間売上高: 500億円",
					"取引先企業数: 1,000社以上",
					"特許取得数: 50件",
					"新卒採用3年後定着率: 95%",
				].map((item) => (
					<div key={item} className="text-lg font-bold mb-2">
						{item}
					</div>
				))}
			</section>

			<section className="w-full mb-12">
				<h2 className="text-2xl font-bold text-primary mb-4">仕事内容</h2>
				<div className="space-y-6">
					<div>
						<h3 className="text-xl font-bold mb-2">
							建設プロジェクトマネージャー
						</h3>
						<p className="text-gray-700">
							大規模建設プロジェクトの企画から完成まで、全体を統括します。チームリーダーとして、様々な専門家と協力しながら、プロジェクトを成功に導きます。
						</p>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-2">環境エンジニア</h3>
						<p className="text-gray-700">
							持続可能な建設技術の研究開発に携わります。最新の環境技術を活用し、エコフレンドリーな建築物の設計・施工方法を提案します。
						</p>
					</div>
				</div>
			</section>

			<section className="w-full mb-12">
				<h2 className="text-2xl font-bold text-primary mb-4">1日の流れ</h2>
				<ul className="space-y-2">
					{[
						"9:00 - 朝礼・スケジュール確認",
						"9:30 - プロジェクトミーティング",
						"11:00 - 現場視察・進捗確認",
						"13:00 - 昼食・休憩",
						"14:00 - デザインレビュー・技術検討",
						"16:00 - 報告書作成・データ分析",
						"17:30 - 翌日の準備・退社",
					].map((item) => (
						<li key={item} className="flex items-center">
							<span className="text-primary mr-2">•</span>
							{item}
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
