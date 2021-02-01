import EN from "../../assets/translations/en";
import RU from "../../assets/translations/ru";
import AM from "../../assets/translations/am";

const languageEnum = {
  hy: 1,
  ru: 2,
  en: 3,
};

const getTranslations = (shortCode) => {
  switch (shortCode) {
    case languageEnum.ru:
      return RU;
    case languageEnum.hy:
      return AM;
    default:
      return EN;
  }
};

class Languages {
  static get ShortCode() {
    if(typeof window !== 'undefined')
     return +window.localStorage.getItem("language") || languageEnum.en;
   
  }
  static get Translations() {
    return getTranslations(Languages.ShortCode);
  }
}

export default Languages;
