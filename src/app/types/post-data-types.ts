export type PostData = {
  id: number;
  caption: string;
  photo_url: string | null;
  created_at: string;
  likes: number;
};

export type PostsFromOneUser = {
  posts: PostData[];
  comments: CommentsData[];
};

export type CommentsData = {
  id: number;
  created_at: string;
  post_id: number;
  comment: string;
  likes: number;
  comment_id: number;
  user_id: string;
};

export type CaptionAndPhotoURL = {
  caption: string;
  photo_url: string | null;
};
