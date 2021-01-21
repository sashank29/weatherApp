import axios, { AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';

export const getHttp = () => {
    const client = axios.create({
        headers: {}
    });
    client.defaults.timeout = 90000;
    axiosRetry( axios, { retries: 2, retryDelay: axiosRetry.exponentialDelay, shouldResetTimeout: true });
    return client;
};

export const urlBuilder = ( url, queryParams = []) => {
    return url.concat( queryParams.length > 0 ? `?${queryParams.join( '&' )}` : '' );
};