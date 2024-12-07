import http from "../http-common";

class DataService {
  expense(data) {
    return http.post("/expenses", data);
  }

    expenses(data) {
    return http.get("/expenses", data);
  }
    summary(data) {
    return http.get("/summary", data);
  }

}

export default new DataService();
