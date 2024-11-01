import { atom } from "jotai";
import { offices } from "../data/officesData";

export const selectedPrefectureAtom = atom<string>(offices[0].prefecture);
export const officesAtom = atom(offices);
export const filteredOfficesAtom = atom((get) => {
	const allOffices = get(officesAtom);
	const selectedPrefecture = get(selectedPrefectureAtom);

	return allOffices.filter(
		(office) => office.prefecture === selectedPrefecture,
	);
});
