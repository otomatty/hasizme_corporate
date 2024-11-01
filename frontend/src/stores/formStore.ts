import { atom } from "jotai";

export interface RequestMaterialsForm {
	selectedMaterial: string;
	name: string;
	email: string;
	message: string;
}

// エラーメッセージ用の型を別途定義
export interface RequestMaterialsErrors {
	material?: string; // materialフィールド用のエラーメッセージ
	name?: string;
	email?: string;
}

export const requestFormAtom = atom<RequestMaterialsForm>({
	selectedMaterial: "",
	name: "",
	email: "",
	message: "",
});

// エラー用のatomの型を修正
export const formErrorsAtom = atom<RequestMaterialsErrors>({});
