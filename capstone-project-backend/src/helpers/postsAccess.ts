import * as aws from "aws-sdk";
import * as xray from "aws-xray-sdk";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { PostItem, PostUpdate } from "../models/Post";
import { createLogger } from "../utils/logger";

const logger = createLogger("PostsAccess");

const xray_aws = xray.captureAWS(aws);

class Posts {
  constructor(
    private readonly db: DocumentClient = new xray_aws.DynamoDB.DocumentClient(),
    private readonly table: string = process.env.POSTS_TABLE,
    private readonly bucket = process.env.ATTACHMENT_S3_BUCKET,
    private readonly userIdIndex: string = process.env.POSTS_CREATED_AT_INDEX
  ) {}

  async getPosts(userId: string): Promise<PostItem[]> {
    logger.info("Get posts query", {
      userId,
    });
    const result = await this.db
      .query({
        TableName: this.table,
        IndexName: this.userIdIndex,
        KeyConditionExpression: "userId = :u",
        ExpressionAttributeValues: {
          ":u": userId,
        },
      })
      .promise();

    const items = result.Items;
    return items as PostItem[];
  }

  async createPosts(newItem: PostItem): Promise<PostItem> {
    logger.info("Create post item", {
      ...newItem,
    });
    const attachmentUrl = `https://${this.bucket}.s3.amazonaws.com/${newItem.postId}`;
    await this.db
      .put({
        Item: { ...newItem, attachmentUrl },
        TableName: this.table,
      })
      .promise();
    return newItem;
  }

  async deletePost(postId: string, userId: string): Promise<string> {
    logger.info("Delete post item", {
      postId,
      userId,
    });
    await this.db
      .delete({
        TableName: this.table,
        Key: {
          userId,
          postId,
        },
      })
      .promise();

    return postId;
  }

  async updatePost(
    newItem: PostUpdate,
    postId: string,
    userId: string
  ): Promise<string> {
    logger.info("Update post item", {
      ...newItem,
      postId,
      userId,
    });
    await this.db
      .update({
        TableName: this.table,
        Key: {
          userId,
          postId,
        },
        ExpressionAttributeNames: {
          "#post_title": "title",
          "#post_description": "description",
        },
        ExpressionAttributeValues: {
          ":title": newItem.title,
          ":description": newItem.description,
        },
        UpdateExpression:
          "SET #post_title=:title, #post_description=:description",
      })
      .promise();

    return postId;
  }

  async postExists(postId: string, userId: string): Promise<boolean> {
    const result = await this.db
      .get({
        Key: {
          postId,
          userId,
        },
        TableName: this.table,
      })
      .promise();
    return !!result.Item;
  }
  async updatePostImage(postId: string, userId: string): Promise<string> {
    logger.info("Update post image: ", {
      postId,
      userId,
    });
    const url = `https://${this.bucket}.s3.amazonaws.com/${postId}`;
    await this.db
      .update({
        TableName: this.table,
        Key: {
          userId: userId,
          postId: postId,
        },
        ExpressionAttributeNames: {
          "#post_attachmentUrl": "attachmentUrl",
        },
        ExpressionAttributeValues: {
          ":attachmentUrl": url,
        },
        UpdateExpression: "SET #post_attachmentUrl = :attachmentUrl",
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return url;
  }
}

export { Posts };
