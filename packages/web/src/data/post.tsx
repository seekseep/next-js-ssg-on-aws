export type Post = { id: string; title: string; content: string };

export const posts: Post[] = [
  { id: 'hello', title: 'Hello', content: 'はじめまして！' },
  { id: 'next',  title: 'Next.js', content: 'SSGでS3+CloudFrontに載せるよ。' },
];
