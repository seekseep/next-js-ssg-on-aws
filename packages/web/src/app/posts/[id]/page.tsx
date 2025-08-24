import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts } from '@/data/posts'

// Next export で完全静的化するため
export const dynamicParams = false

export function generateStaticParams() {
  return posts.map(p => ({ id: p.id }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id)
  return { title: post ? post.title : 'Not found' }
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id)
  if (!post) return notFound()

  return (
    <main style={{ padding: 24 }}>
      <nav><Link href="/posts">← posts</Link></nav>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  )
}
