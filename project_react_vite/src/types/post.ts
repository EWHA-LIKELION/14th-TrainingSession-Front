export interface Comment {
  id: number;

  username: string;

  created_at: string;

  comment_text: string;

  isMyComment: boolean;
}

export interface Post {
  id: number;

  title: string;

  body: string;

  date: string;

  comments: Comment[]; // 댓글 여러 개 → Comment 배열
}
