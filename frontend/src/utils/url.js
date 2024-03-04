// i want to use this url from any page in the frontend
// url http://127.0.0.1:5000
// also make functions for axios get, post, put, delete
import axios from "axios";
export const url = "http://127.0.0.1:5000";

export const get = async (path, config = {}) => {
  try {
    const response = await axios.get(url + path, config);
    return response;
  } catch (error) {
    return error.response;
  }
};
export const post = async (path, data = {}, config = {}) => {
  try {
    const response = await axios.post(url + path, data, config);
    return response;
  } catch (error) {
    return error.response;
  }
};
export const put = async (path, data = {}, config = {}) => {
  try {
    const response = await axios.put(url + path, data, config);
    return response;
  } catch (error) {
    return error.response;
  }
};
export const remove = async (path) => {
  try {
    const response = await axios.delete(url + path);
    return response;
  } catch (error) {
    return error.response;
  }
};
