async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    return res.json();
  }
  
  import Link from "next/link";
  
  export default async function BlogPage() {
    const posts = await getPosts();
  
    return (
      <main>
        <h1>Blog Posts</h1>
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }
  