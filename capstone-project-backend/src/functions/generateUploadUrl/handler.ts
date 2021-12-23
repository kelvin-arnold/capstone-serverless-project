import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { middyfy } from "@libs/lambda";
import {
  generateUploadUrl,
  postExists,
  updatePostImage,
} from "../../helpers/businessLogic/posts";
import { getUserId } from "../utils";
import { createLogger } from "../../utils/logger";

const logger = createLogger("PostUploadUrl");

const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const userId = getUserId(event);
  const postId = event.pathParameters.postId;
  const validPostId = await postExists(postId, userId);
  if (!validPostId) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        error: "Post does not exist",
      }),
    };
  }
  const uploadUrl = await generateUploadUrl(postId);
  await updatePostImage(postId, userId);
  logger.info("uploadUrl: ", uploadUrl);
  return {
    statusCode: 200,
    body: JSON.stringify({ uploadUrl }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
};

export const main = middyfy(handler);
