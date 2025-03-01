async function getPosts(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json();
}

export default async function BlogPost({ params }: any){
    const post = await getPosts(params.id);

    return (
        <main>
          <h1 className="text-3xl">{post.title}</h1>
          <p>{post.body}</p>
        </main>
      );
}