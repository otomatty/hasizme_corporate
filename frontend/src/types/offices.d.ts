export interface Office {
  name: string;
  prefecture: string;
  address: string;
  postalCode: string; // 追加
  phone: string;
  fax: string;
  imageUrl?: string;
  mapUrl: string;
}
