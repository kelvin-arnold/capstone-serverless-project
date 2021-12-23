import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { middyfy } from "@libs/lambda";
import { getPostsForUser } from "../../helpers/businessLogic/posts";
import { getUserId } from "../utils";

const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const userId = getUserId(event);
  const posts = await getPostsForUser(userId);
  return {
    statusCode: 200,
    body: JSON.stringify(posts),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
};

export const main = middyfy(handler);
