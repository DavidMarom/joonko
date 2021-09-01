import { httpService } from './httpService'

function getProducts(limit) {
	return httpService.get(`file/?id=${limit}`);
}

function sendFormData(data) {
	return httpService.post(`data/`,data);
}



export const productService = {
	getProducts,
	sendFormData
};