import Link from 'next/link'
import { posts } from '@/data/posts'

export default function PostsIndex() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Posts</h1>
      <ul>
        {posts.map(p => (
          <li key={p.id}>
            <Link href={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
