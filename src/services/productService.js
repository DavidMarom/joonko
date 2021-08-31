import { httpService } from './httpService'

function getProducts(limit) {
	return httpService.get(`file/?id=${limit}`);
}

export const productService = {
	getProducts
};