import axios from "axios";

export default class AuthService {
  registerCompanyPersonnel(values, confirmPassword) {
    return axios.post(
      `http://localhost:8080/api/auth/registerCompanyStaff?confirmPassword=${confirmPassword}`,
      values
    );
  }
  //confirmPassword for Company Personnel
  registerCandidate(values, confirmPassword) {
    return axios.post(
      ` http://localhost:8080/api/auth/registerCandidate?confirmPassword=${confirmPassword}`,
      values
    );
  }
  //confirmPassword for Candidate
  registerEmployer(values, confirmPassword) {
    return axios.post(
      ` http://localhost:8080/api/auth/registerEmployer?confirmPassword=${confirmPassword}`,
      values
    );
  }
  //confirmPassword for Employer
}
