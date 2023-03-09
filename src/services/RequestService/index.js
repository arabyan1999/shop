import axios from 'axios';
import { API_CONFIG } from '../../utils/constants';

const headers = {
    'Content-Type': 'application/json',
};

class RequestService {
    instance = null;

    get http() {
        return this.instance != null ? this.instance : this.initHttp();
    }

    initHttp() {
        const http = axios.create({
          baseURL: API_CONFIG.BASE_URL,
          responseType: '',
          headers,
        });
    
        http.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return error;
        },
        );

        this.instance = http;
        return http;
    }

    request(config) {
        return this.http.request(config);
    }

    get(url, config) {
        const res = this.http.get(url, config);
        return res;
    }

    post(url, data, config) {
        const res = this.http.post(url, data, config);
        return res;
    }

    put(url, data, config) {
        const res = this.http.put(url, data, config);
        return res;
    }

    patch(url, data, config) {
        const res = this.http.patch(url, data, config);
        return res;
    }

    delete(url, config) {
        const res = this.http.delete(url, config);
        return res;
    }
}

export const http = new RequestService();
