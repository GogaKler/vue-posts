import * as axios from 'axios'


const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const postsApi = {
	getPosts(limit = null, page) {
		return instance.get(`posts`, {
			params: {
				_page: page,
				_limit: !limit ? '' : limit,
			}
		})
	},
}