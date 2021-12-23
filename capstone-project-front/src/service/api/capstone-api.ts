import axios from "axios";
import {apiEndpoint as baseURL} from "../../config";

const axiosConfig = {
	baseURL,
};

// Create new Axios Instance
const http = axios.create(axiosConfig);

// Request Interceptor
http.interceptors.request.use(
	(config) => {
		// Definir o config antes de fazer um request
		const token = localStorage.getItem("@Auth:idToken");
		console.log("token❤❤", token);

		if (token && config.headers) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		console.log(`Request config -> `, config);
		return config;
	},
	(error) => {
		// Padronizar os errors no request
		console.info(`Request error -> `, error);
		return Promise.reject(error);
	},
);

// Response Interceptor
http.interceptors.response.use(
	(response) => {
		// Transformar as respostas aqui se for necessario
		console.log(`Response data -> `, response);
		return response;
	},
	(error) => {
		// Padronizar os errors no response
		console.info(`Response error -> `, error);
		return Promise.reject(error);
	},
);

export {http};
