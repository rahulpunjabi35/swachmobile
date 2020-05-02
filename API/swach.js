import axios from "axios";

const swach = axios.create({
  baseURL: "https://swachbackend.herokuapp.com",
  headers: {
    "content-type": "application/json",
  },
});

export default swach;
