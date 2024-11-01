import { atom } from "jotai";

interface ContactForm {
	name: string;
	email: string;
	phone: string;
	company: string;
	message: string;
}

export const contactFormAtom = atom<ContactForm>({
	name: "",
	email: "",
	phone: "",
	company: "",
	message: "",
});

export const contactFormErrorsAtom = atom<Partial<ContactForm>>({});
