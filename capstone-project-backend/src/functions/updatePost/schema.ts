export default {
  title: "update post",
  type: "object",
  properties: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
      minLength: 1,
    },
  },
  required: ["description"],
  additionalProperties: false,
} as const;
