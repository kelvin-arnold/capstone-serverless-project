export interface PostItem {
  userId: string;
  postId: string;
  createdAt: string;
  name: string;
  done: boolean;
  attachmentUrl?: string;
}

export interface PostUpdate {
  title: string;
  description: string;
}
