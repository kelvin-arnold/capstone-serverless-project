export interface PostItem {
  userId: string;
  postId: string;
  createdAt: string;
  title?: string;
  description?: string;
  attachmentUrl?: string;
}

export interface PostUpdate {
  title: string;
  description: string;
}
