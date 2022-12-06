import i18n from "i18next";
import Backend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";

const fallbackLng = ['en']
const availableLanguages = ['en', 'bn']

i18n
.use(Backend)
.use(initReactI18next)
.init({
	fallbackLng,
	detection: {
		checkWhiteList: true
	},
	debug: false,
	whitelist: availableLanguages,
	interpolation: {
		escapeValue: false
	}
});

export default i18n;