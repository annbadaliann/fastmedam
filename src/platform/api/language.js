import Connection from "../services/connection";

const controllerName = "Language";

class LanguageController {
  static GetLanguage = () => {
    const result = Connection.GET(controllerName, "GetList");
    return result;
  };

  static ChangeLanguage = query => {
    const result = Connection.PUT(controllerName, `UpdateLanguage/${query}`);
    return result;
  };

}

export default LanguageController;
