import { Posts } from "./postsAccess";
import { AttachmentUtils } from "./attachmentUtils";
import { PostItem, PostUpdate } from "../models/Post";
import { v4 as uuidv4 } from "uuid";

const newPosts = new Posts();
const newAttachUtil = new AttachmentUtils();

const getPostsForUser = async (userId: string) => {
  return await newPosts.getPosts(userId);
};
const createPost = async (newPost: PostItem, userId: string) => {
  const newItem: PostItem = {
    postId: uuidv4(),
    userId,
    title: newPost.title,
    description: newPost.description,
    createdAt: new Date().toISOString(),
  };
  return await newPosts.createPosts(newItem);
};
const deletePost = async (postId: string, userId: string) => {
  return await newPosts.deletePost(postId, userId);
};
const updatePost = async (
  newPost: PostUpdate,
  postId: string,
  userId: string
) => {
  return await newPosts.updatePost(newPost, postId, userId);
};
const generateUploadUrl = async (postId: string) => {
  return await newAttachUtil.getUploadUrl(postId);
};

const updatePostImage = async (postId: string, userId: string) => {
  return await newPosts.updatePostImage(postId, userId);
};

const postExists = async (postId: string, userId: string) => {
  return await newPosts.postExists(postId, userId);
};

export {
  getPostsForUser,
  createPost,
  deletePost,
  updatePost,
  generateUploadUrl,
  updatePostImage,
  postExists,
};
