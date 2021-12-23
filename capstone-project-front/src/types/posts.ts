export type Post = {
	readonly postId: string;
	readonly createdAt: string;
	readonly title: string;
	readonly description: string;
	readonly userId?: string;
	readonly attachmentUrl?: any;
};

export type UpdatePost = {
	readonly title?: string;
	readonly description: string;
};

export type CreatePost = {
	readonly title?: string;
	readonly image?: boolean;
	readonly description: string;
};
