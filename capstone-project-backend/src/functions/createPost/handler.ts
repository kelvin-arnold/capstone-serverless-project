import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { middyfy } from "@libs/lambda";
import { CreatePostRequest } from "../../requests/CreatePostRequest";
import { getUserId } from "../utils";
import {
  createPost,
  generateUploadUrl,
} from "../../helpers/businessLogic/posts";

const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const newPost: CreatePostRequest | any = event.body;
  const userId: string = getUserId(event);
  const response = await createPost(newPost, userId);
  const attachUrl = await generateUploadUrl(response.postId);
  return {
    statusCode: 200,
    body: JSON.stringify({ ...response, attachUrl }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
};

export const main = middyfy(handler);
