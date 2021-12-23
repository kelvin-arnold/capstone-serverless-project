import {http} from "./../api/capstone-api";
import {Post, CreatePost, UpdatePost} from "./../../types/posts";

const getAllPosts = async (): Promise<Post[]> => {
	const response = await http.get("/posts");
	return response.data;
};
const createPost = async (newPost: CreatePost) => {
	console.log("newPost: ", newPost);
	const response = await http.post(`/posts`, newPost);
	return response.data;
};
const updatePost = async (postId: string, newPost: UpdatePost) => {
	const response = await http.patch(`/posts/${postId}`, newPost);
	return response.data;
};
const updateImageAttach = async (postId: string) => {
	const response = await http.post(`/posts/${postId}/attachment`);
	return response.data;
};
const deletePost = async (postId: string) => {
	const response = await http.delete(`/posts/${postId}`);
	return response.data;
};

export {getAllPosts, createPost, updatePost, updateImageAttach, deletePost};
