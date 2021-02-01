import Connection from "../services/connection";

const controllerName = "Favorite";

class FavoritesController {
  static GetFavorites = body => {
    const result = Connection.POST(controllerName, 'Search', body);
    return result;
  };

  static RemoveFavMedicine = query => {
    const result = Connection.DELETE(controllerName, `Remove/${query}`);
    return result;
  }

  static AddFavMedicine = query => {
    const result = Connection.POST(controllerName, `Add/${query}`);
    return result;
  }

  static GetFavoriteMedicineDetails = query => {
    const result = Connection.GET(controllerName, `Details/${query}`);
    return result;
  }
}

export default FavoritesController;
