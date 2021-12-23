import { middyfy } from "@libs/lambda";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { deletePost } from "../../helpers/businessLogic/posts";
import { getUserId } from "../utils";

const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const postId = event.pathParameters.postId;
  const userId = getUserId(event);
  const response = await deletePost(postId, userId);
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
