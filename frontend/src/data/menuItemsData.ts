import { Component } from "solid-js";
import {
  FaSolidBuilding,
  FaSolidBriefcase,
  FaSolidUsers,
  FaSolidHandshake,
  FaSolidUserTie,
  // FaRegularCircleQuestion,
} from "solid-icons/fa";

export type SubMenuItem = {
  title: string;
  link: string;
};

export type MenuItem = {
  title: string;
  link: string;
  subItems: SubMenuItem[];
  icon: Component; // アイコンを追加
};

export const menuItems: MenuItem[] = [
  {
    title: "会社情報",
    link: "/about-us",
    icon: FaSolidBuilding,
    subItems: [
      { title: "会社情報トップ", link: "/about-us" },
      { title: "会社概要", link: "/about-us/company-profile" },
      { title: "沿革", link: "/about-us/history" },
      {
        title: "震災から今日までの歩み",
        link: "/about-us/post-disaster-journey",
      },
    ],
  },
  {
    title: "事業紹介",
    link: "/services",
    icon: FaSolidBriefcase,
    subItems: [
      { title: "事業紹介トップ", link: "/services" },
      { title: "建材", link: "/services/building-materials" },
      { title: "セメント", link: "/services/cement" },
      { title: "鋼材・土木", link: "/services/steel-civil-engineering" },
      { title: "金物", link: "/services/hardware" },
      { title: "化成品", link: "/services/chemical-products" },
      { title: "DX", link: "/services/dx" },
    ],
  },

  {
    title: "橋爪倶楽部",
    link: "/blog",
    icon: FaSolidUsers,
    subItems: [],
  },
  {
    title: "CSR活動",
    link: "/csr",
    icon: FaSolidHandshake,
    subItems: [],
  },
  {
    title: "採用情報",
    link: "/careers",
    icon: FaSolidUserTie,
    subItems: [
      { title: "採用トップ", link: "/careers" },
      { title: "新卒採用", link: "/careers/new-graduates" },
      { title: "中途採用", link: "/careers/mid-career" },
    ],
  },
  // {
  //   title: 'よくある質問',
  //   link: '/faq',
  //   icon: FaRegularCircleQuestion,
  //   subItems: [],
  // },
];
