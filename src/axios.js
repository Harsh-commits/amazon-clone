import axios from "axios";

const instance = axios.create({
  //The API (cloud function)url

  baseURL: "http://localhost:5001/challenge-c8594/us-central1/api",
});

export default instance;
