import axiosClient from "../service/axiosClient";

const getApi = {
  getProduct: () => {
    const url = "/products";
    return axiosClient.get(url);
  },
  getCategoryProduct: () => {
    const url = "/products/categories";
    return axiosClient.get(url);
  },
  getSearchId: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  getUser: () => {
    const url = "/users";
    return axiosClient.get(url);
  },
  userLogin: (username, password) => {
    const url = `/auth/login`;
    return axiosClient.post(url, { username, password });
  },
};

export default getApi;
