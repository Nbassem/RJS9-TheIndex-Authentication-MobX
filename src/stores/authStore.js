import jwt_decode from "jwt-decode";
import { decorate, observable, computed } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com/"
});

class AuthStore {
  user = null;

  setUser = token => {
    if (token) {
      axios.defaults.headers.common.Authorization = `JWT ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
    } else {
      delete axios.defaults.headers.common.Authorization;
      this.user = null;
    }
  };

  loginUser = async userData => {
    try {
      const res = await instance.post("login/", userData);
      const data = res.data;
      this.setUser(data.token);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  signupUser = async userData => {
    try {
      const res = await instance.post("signup/", userData);
      const user = res.data;
      this.setUser(user.token);
    } catch (err) {
      console.error(err.response.data);
    }
  };
  logout = () => {
    this.setUser(null);
  };
}
decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
export default authStore;
