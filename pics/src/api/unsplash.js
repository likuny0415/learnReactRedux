import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID 6DYaMOzl-lyK-g3XHZNo8nz8S_L6emSQ2Dwb1994U3k",
	},
});
