import Connection from "../services/connection";

const controllerName = "Medicine";

class SearchMedicineController {
  static SearchMedicineWeb = (body) => {
    const result = Connection.POST(controllerName, "SearchMedicineWeb", body);
    return result;
  };

  static GetMedicineDetails = (query) => {
    const result = Connection.GET(controllerName, `WebMedicineDetails/${query}`);
    return result;
  };

}

export default SearchMedicineController;
