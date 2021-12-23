import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { middyfy } from "@libs/lambda";
import { getUserId } from "../utils";
import { updatePost } from "../../helpers/posts";
import { UpdatePostRequest } from "../../requests/UpdatePostRequest";

const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const postId = event.pathParameters.postId;
  const updatedPost: UpdatePostRequest | any = event.body;
  const userId = getUserId(event);
  const response = await updatePost(
    {
      ...updatedPost,
    },
    postId,
    userId
  );
  return {
    statusCode: 200,
    body: JSON.stringify({ response }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
};

export const main = middyfy(handler);
