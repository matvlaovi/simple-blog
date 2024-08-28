export const BASE_API_URL = 'https://dummyjson.com/posts';

export interface BlogPostsResponse {
  limit: number;
  skip: number;
  total: number;
  posts: BlogPost[];
}

export interface BlogPost {
  id: number;
  userId: number;
  title: string;
  body: string;
  tags: string[];
  views: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
}

export interface CreateBlogPostBody {
  userId: number;
  title: string;
  body: string;
  tags: string[];
}
