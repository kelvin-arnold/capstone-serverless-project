export default {
  title: "create post",
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
  required: ["title", "description"],
  additionalProperties: false,
} as const;
