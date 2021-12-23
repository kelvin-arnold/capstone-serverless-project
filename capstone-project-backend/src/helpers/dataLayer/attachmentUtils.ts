import * as aws from "aws-sdk";
import * as xray from "aws-xray-sdk";
import { createLogger } from "../../utils/logger";

const logger = createLogger("PostsAccess");
const xray_aws = xray.captureAWS(aws);

const s3 = new xray_aws.S3({
  signatureVersion: "v4",
});

class AttachmentUtils {
  constructor(
    private readonly bucketName: string = process.env.ATTACHMENT_S3_BUCKET,
    private readonly urlExpiration: string = process.env.SIGNED_URL_EXPIRATION
  ) {}

  async getUploadUrl(postId: string) {
    logger.info("Upload url", {
      postId,
    });
    return s3.getSignedUrl("putObject", {
      Bucket: this.bucketName,
      Key: postId,
      Expires: parseInt(this.urlExpiration),
    });
  }
}

export { AttachmentUtils };
