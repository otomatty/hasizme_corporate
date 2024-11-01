import { atom } from "jotai";
import type { Product } from "@/types/product";

interface UIState {
	isMenuOpen: boolean;
	activeMenu: string | null;
	isMobile: boolean;
	mainMarginTop: number;
	isScrollingDown: boolean;
}

export const uiStateAtom = atom<UIState>({
	isMenuOpen: false,
	activeMenu: null,
	isMobile: window.innerWidth <= 1200,
	mainMarginTop: 0,
	isScrollingDown: false,
});

// モーダルの型定義
export type ModalType = "product" | "contact" | "image" | null;

export interface ModalState {
	isOpen: boolean;
	type: ModalType;
	data: Product | null; // または他の型も受け入れる場合は union type を使用
}

export const modalStateAtom = atom<ModalState>({
	isOpen: false,
	type: null,
	data: null,
});
