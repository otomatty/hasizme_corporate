export interface HistoryEvent {
	japaneseyear: string; // 年号
	japaneseyear_number: number; // 年号の年数
	year: number; // 西暦年
	month?: number; // 月
	event: string;
}

export const historyData: HistoryEvent[] = [
	{
		japaneseyear: "昭和",
		japaneseyear_number: 3,
		year: 1928,
		event: "橋爪由也が大船渡に金物船具商を開業。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 12,
		year: 1937,
		event: "東北セメント大船渡工場のセメント販売特約店となる。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 17,
		year: 1942,
		event:
			"同工場と小野田セメント社の合併後も引き続き特約店となり、セメント及び石灰運搬のため海運業を兼営。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 26,
		year: 1951,
		month: 5,
		event:
			"法人に改組し、社長橋爪由也、橋爪商事株式会社（資本金100万円）を設立。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 42,
		year: 1967,
		month: 3,
		event: "海運業を廃業し、7月4回の増資を経て資本金1,200万円となる。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 43,
		year: 1968,
		event: "大船渡レミコン工場を建設、生コン製造販売を開始。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 45,
		year: 1970,
		event:
			"高田営業所、高田レミコン工場開設、社長橋爪由也死去に伴い橋爪幸平社長に就任。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 46,
		year: 1971,
		event: "現在地に本社を移転し、又北上営業所を開設。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 47,
		year: 1972,
		event: "保険部門別会社に組織替",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 48,
		year: 1973,
		event:
			"北上支店新築移転し、六原スプリットン工場建設及び盛岡営業所を開設し、資本金2,000万円となる。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 49,
		year: 1974,
		event: "仙台営業所を開設。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 50,
		year: 1975,
		event: "資本金2,600万円となる。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 53,
		year: 1978,
		event:
			"大船渡レミコン工場を新替し、大船渡レミコン第２工場を高田工場に移転。又、資本金5,200万円となる。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 54,
		year: 1979,
		event:
			"高田レミコン工場売却、高田支店事務所倉庫新築移転、資本金9,800万円となる。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 55,
		year: 1980,
		event: "盛岡支店事務所倉庫新築移転。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 56,
		year: 1981,
		event: "三戸支店、志津川支店、田沢湖営業所を開設。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 57,
		year: 1982,
		event: "宮古支店を開設、資本金１億2,740万円となる。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 58,
		year: 1983,
		event: "一関、久慈営業所を開設し、大船渡レミコンを分離独立。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 62,
		year: 1987,
		month: 8,
		event:
			"大曲営業所を開設。10月、大船渡レミコン、川井レミコンを統合、大船渡レミコン大船渡工場、川井工場とする。",
	},
	{
		japaneseyear: "昭和",
		japaneseyear_number: 63,
		year: 1988,
		month: 4,
		event: "仙台営業所を仙台支店に改組。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 1,
		year: 1989,
		month: 1,
		event: "仙台支店事務所倉庫新築移転、一関営業所事務所倉庫新築移転。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 6,
		year: 1994,
		month: 6,
		event: "資本金１億5,153万円とした。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 6,
		year: 1994,
		month: 12,
		event: "大曲営業所を大曲支店とし、事務所・倉庫新築移転。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 2,
		year: 1990,
		month: 6,
		event: "資本金２億1,700万円となる。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 2,
		year: 1990,
		month: 8,
		event: "本荘営業所開設。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 3,
		year: 1991,
		month: 5,
		event: "橋爪幸平会長、宮澤信平社長に就任。資本金２億5,120万円となる。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 3,
		year: 1991,
		month: 11,
		event: "マーク変更。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 7,
		year: 1995,
		month: 4,
		event: "一関営業所を一関支店とし、事務所・倉庫を新築。高田レミコン買収。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 10,
		year: 1998,
		month: 4,
		event: "本荘営業所を大曲支店へ統合し、高田レミコンを分離独立。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 13,
		year: 2001,
		month: 3,
		event: "大船渡レミコン川井工場閉鎖。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 14,
		year: 2002,
		month: 4,
		event:
			"田沢湖営業所を大曲支店へ統合し、久慈営業所を久慈支店に改組、ISO9001:本社認証取得。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 18,
		year: 2006,
		month: 1,
		event: "志津川支店を南三陸支店とする。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 19,
		year: 2007,
		month: 2,
		event: "奥州営業所を開設。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 19,
		year: 2007,
		month: 6,
		event: "釜石営業所を開設。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 21,
		year: 2009,
		month: 4,
		event: "釜石営業所を釜石支店に改組。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 23,
		year: 2011,
		month: 3,
		event:
			"東日本大震災　本社社屋、倉庫、高田支店、南三陸支店全壊、釜石支店被災。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 24,
		year: 2012,
		month: 10,
		event: "高田支店新築移転。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 25,
		year: 2013,
		month: 3,
		event: "南三陸支店新築移転。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 25,
		year: 2013,
		month: 5,
		event:
			"社長交代　橋爪博志が社長、宮澤信平が会長、橋爪幸平が相談役にそれぞれ就任。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 25,
		year: 2013,
		month: 11,
		event: "釜石支店新築移転。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 27,
		year: 2015,
		month: 4,
		event: "気仙沼営業所開設。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 29,
		year: 2017,
		month: 7,
		event: "本社･本店並びに建材センター新築移転。",
	},
	{
		japaneseyear: "平成",
		japaneseyear_number: 30,
		year: 2018,
		month: 12,
		event: "宮古支店岩泉出張所開設。",
	},
	{
		japaneseyear: "令和",
		japaneseyear_number: 1,
		year: 2019,
		month: 5,
		event:
			"本店 鉄鋼･土木資材センター及び化成品倉庫新築移転。本社・本店が拠点集約。",
	},
	{
		japaneseyear: "令和",
		japaneseyear_number: 2,
		year: 2020,
		month: 9,
		event: "気仙沼営業所移転。",
	},
	{
		japaneseyear: "令和",
		japaneseyear_number: 2,
		year: 2020,
		month: 9,
		event: "宮古支店移転。",
	},
	{
		japaneseyear: "令和",
		japaneseyear_number: 3,
		year: 2021,
		month: 11,
		event: "遠野出張所開設。",
	},
];
