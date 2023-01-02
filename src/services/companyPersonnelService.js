import axios from "axios";

export default class CompanyPersonnelService {
  update(values) {
    return axios.put(
      "http://localhost:8080/api/companyPersonnels/update",
      values
    );
  }

  getById(id) {
    return axios.get(
      `http://localhost:8080/api/companyPersonnels/getById?id=${id}`
    );
  }
}
