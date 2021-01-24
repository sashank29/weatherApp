import axios from "axios";
import axiosRetry from "axios-retry";
import config from "./config.json";

export const getHttp = () => {
  const client = axios.create({
    headers: {},
  });
  client.defaults.timeout = 90000;
  axiosRetry(axios, {
    retries: 2,
    retryDelay: axiosRetry.exponentialDelay,
    shouldResetTimeout: true,
  });
  return client;
};

export const urlBuilder = (url, queryParams = []) => {
  return url.concat(queryParams.length > 0 ? `?${queryParams.join("&")}` : "");
};

export async function getWeatherDetails(city, unit) {
  const appId = "b4cad4069f1421efddb627e798f7cc50"; //Should be in a separate configuration file
  const response = {
    data: null,
    error: null,
  };
  const url = urlBuilder(config.API, [
    `q=${city}`,
    `units=${unit}`,
    `appid=${appId}`,
  ]);

  const axiosClient = getHttp();

  try {
    const { data } = await axiosClient(url);
    response.data = data;
  } catch (error) {
    response.error = error;
  } finally {
    return response;
  }
}
