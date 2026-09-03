/**
 * 서버 응답(게시글/댓글)의 형태를 정의하는 타입 모음
 *
 * - API 응답이 어떤 필드를 갖는지 한 곳에 모아두면
 *   컴포넌트/스토어/함수 어디서든 같은 타입을 가져다 쓸 수 있다.
 */

// 댓글 1개의 형태
export interface Comment {
  id: number;
  username: string;
  created_at: string; // ISO 날짜 문자열 (예: "2026-03-01T18:36:00")
  comment_text: string;
  isMyComment: boolean;
}

// 게시글 상세의 형태
export interface Post {
  id: number;
  title: string;
  body: string;
  date: string; // ISO 날짜 문자열
  comments: Comment[];
}
