import Connection from "../services/connection";

const controllerName = "NoteMedicine";

class NotesController {
  static GetNoteMedicines = body => {
    const result = Connection.POST(controllerName, "Search", body);
    return result;
  };

  static RemoveNoteMedicine = query => {
    const result = Connection.DELETE(controllerName, `Remove/${query}`);
    return result;
  };

  static AddNoteMedicine = body => {
    const result = Connection.POST(controllerName, "NoteMedicine", body);
    return result;
  };
      
  static EditNoteMedicine = body => {
    const result = Connection.POST(controllerName, "NoteMedicine", body);
    return result;
  };

}

export default NotesController;
