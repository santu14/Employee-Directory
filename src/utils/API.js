import axios from "axios";


export default {
  getAll: () => {
    return axios.get("https://randomuser.me/api/?results=100&nat=us");
  }
};
