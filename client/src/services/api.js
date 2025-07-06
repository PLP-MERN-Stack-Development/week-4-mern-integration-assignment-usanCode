
import axios from 'axios';

const API = axios.create({
	baseURL: "http://localhost:5000/api"

});

API.interceptors.request.use(cfg => {
	const token = localStorage.getItem("token");
	if (token) cfg.headers.Authorization = 'Bearer ${token}';
	return cfg;

});

export default API;

// Now the backend API can be accessed using the API object.
// the backend and the frontend are connected.