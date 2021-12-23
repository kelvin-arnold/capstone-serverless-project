import { handlerPath } from "@libs/handlerResolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "posts",
        cors: true,
        authorizer: "auth",
      },
    },
  ],
  iamRoleStatements: [
    {
      Effect: "Allow",
      Action: ["dynamodb:Scan", "dynamodb:Query"],
      Resource:
        "arn:aws:dynamodb:${opt:region, self:provider.region}:*:table/${self:provider.environment.POSTS_TABLE}",
    },
    {
      Effect: "Allow",
      Action: ["dynamodb:Query"],
      Resource:
        "arn:aws:dynamodb:${opt:region, self:provider.region}:*:table/${self:provider.environment.POSTS_TABLE}/index/${self:provider.environment.POSTS_CREATED_AT_INDEX}",
    },
  ],
};
