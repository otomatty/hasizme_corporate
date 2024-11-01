import { atom } from "jotai";

export const isMenuOpenAtom = atom(false);
export const isMobileAtom = atom(window.innerWidth <= 1200);
export const activeMenuAtom = atom<string | null>(null);
export const mainMarginTopAtom = atom(0);
