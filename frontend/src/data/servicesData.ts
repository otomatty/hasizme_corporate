export interface ServiceData {
  id: string;
  icon: string;
  title: string;
  description: string;
  products: string[];
  contact: string;
  blogUrl: string;
  imageUrl: string;
  features: string[];
}

export const services: ServiceData[] = [
  // {
  //   id: 'development-sales',
  //   icon: '📈',
  //   title: '開発営業',
  //   description:
  //     '21世紀の日本の産業界は、これまでにない新商品の開発に心血を注いでおります。それに伴い、商品のライフサイクルも著しいものがあります。そうした時代の環境に、我々開発営業部は顧客である官公庁・土木コンサル様に対して新製品のご紹介、そして物件情報をもとに工事計画を把握し、ニーズにお応えする商品選定をして提案営業を積極的に展開しております。',
  //   products: ['新製品情報提供', '工事計画分析', 'カスタマイズ商品提案'],
  //   contact: 'development-sales@example.com',
  //   blogUrl: '/category/development-sales',
  //   imageUrl: '/images/development-sales.jpg',
  //   features: ['最新の市場動向分析', 'カスタマイズされた提案', '迅速な対応'],
  // },
  {
    id: 'building-materials',
    icon: '🏗️',
    title: '建材',
    description:
      '私たち建材部のスタップはお客様とメーカーとの中間に位置しながら、常に情報交換を緊密に行える様心がけています。質の高い健康で快適な住宅づくりこそ、私たちが目指し続けているものです',
    products: ['断熱材', '内装材', '外装材', '建具'],
    contact: 'building-materials@example.com',
    blogUrl: '/category/building-materials',
    imageUrl: '/images/building-materials.jpg',
    features: [
      '高品質な建材の提供',
      '環境に配慮した製品選定',
      '専門家によるアドバイス',
    ],
  },
  {
    id: 'cement',
    icon: '⚙️',
    title: 'セメント',
    description:
      '人々が集う処、そこにはいくつものコンクリートがあります。いつも見慣れているそのコンクリートも、形や色はさほどかわらなくとも、その品質や施工技術は時代と共に大きく進歩し続けています。私たちセメント部は、ふるさとの発展を支える礎として、このセメントのぬくもりを影響しつつけます。',
    products: [
      '普通ポルトランドセメント',
      '高炉セメント',
      '早強セメント',
      '白色セメント',
    ],
    contact: 'cement@example.com',
    blogUrl: '/category/cement',
    imageUrl: '/images/cement.jpg',
    features: ['高品質セメントの提供', '多様な用途に対応', '技術サポート'],
  },
  {
    id: 'steel-civil-engineering',
    icon: '🔧',
    title: '鋼材・土木',
    description:
      '環境に対する社会的認識が高まる中、環境配慮に向けた取り組みが要望されています。私たちは顧客満足の実現に向けて、便利で快適な社会を支えるインフラ整備充実のため積極的に迅速可鍛に挑戦しています。',
    products: ['鉄筋', '鋼管', 'H形鋼', '土木資材'],
    contact: 'steel-civil@example.com',
    blogUrl: '/category/steel-civil',
    imageUrl: '/images/steel-civil.jpg',
    features: [
      '高強度鋼材の提供',
      '環境配慮型製品',
      '総合的な土木ソリューション',
    ],
  },
  {
    id: 'hardware',
    icon: '🔩',
    title: '金物',
    description:
      '金物では、上下水道用材・配管材・鋼材二次製品を主軸に、建築・土木工事のあらゆる面で対応できる製品を取りそろえております。技術工法の変化の著しい今日、常に新しい情報をメーカー等とタイアップしながらお客様に提供できる様努力しております。',
    products: ['水道用資材', '配管材', '鋼材二次製品', '建築金物'],
    contact: 'hardware@example.com',
    blogUrl: '/category/hardware',
    imageUrl: '/images/hardware.jpg',
    features: [
      '幅広い製品ラインナップ',
      '最新の技術情報提供',
      'カスタマイズ対応',
    ],
  },
  {
    id: 'chemical-products',
    icon: '🧪',
    title: '化成品',
    description:
      '環境問題がクローズアップされる中、コンプライアンスを重視し、無機・有機化学薬品をはじめ、半導体薬品、触媒などの高機能薬品、什器備品を取り扱っております。',
    products: ['無機化学薬品', '有機化学薬品', '半導体薬品', '触媒'],
    contact: 'chemical-products@example.com',
    blogUrl: '/category/chemical-products',
    imageUrl: '/images/chemical-products.jpg',
    features: ['環境配慮型製品', '高機能薬品の提供', '安全性と品質の保証'],
  },
  {
    id: 'dx',
    icon: '💻',
    title: 'DX',
    description:
      'デジタルトランスフォーメーションを推進し、業務効率化を図ります。',
    products: [
      '業務効率化ソリューション',
      'データ分析ツール',
      'クラウドサービス',
      'IoTデバイス',
    ],
    contact: 'dx@example.com',
    blogUrl: '/category/dx',
    imageUrl: '/images/dx.jpg',
    features: [
      'カスタマイズ可能なソリューション',
      'データ駆動型意思決定支援',
      '最新技術の導入サポート',
    ],
  },
];
