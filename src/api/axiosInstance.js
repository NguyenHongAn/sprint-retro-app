const axios = require('axios');
const baseURL = process.env.REACT_APP_ENV === "develop"? process.env.REACT_APP_DEV_SITE: process.env.REACT_APP_PRODUCT_SITE;
console.log(baseURL);
const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE",
        "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept,Authorization",

    }
  });

  axiosInstance.interceptors.request.use((config) => {
    //if token is exists, set header
    const token = localStorage.getItem("jwt-token");
    if (token)
    {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });

module.exports =  axiosInstance;



