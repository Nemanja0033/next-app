import { error } from "console";
import { NextResponse } from "next/server";
import { title } from "process";

const posts = [
    {id: 1, title: 'First Post', content: 'Some content. . .'},
    {id: 2, title: 'Second post', content: 'Some content. . .'},
    {id: 3, title: 'Third post', content: 'Some content. . .'}
];

export async function GET(){
    return NextResponse.json(posts);
}

export async function POST(req: Request){
    const { title, content } = await req.json();
   
    if(!title || !content){
        return NextResponse.json({error: "Title and content are required!"}, {status: 400})
    }
    
    const newPost = {id: posts.length + 1, content: content , title: title };
    posts.push(newPost);

    return NextResponse.json(newPost, {status: 201});
}

export async function DELETE(req: Request){
    const { id } = await req.json();

    posts.filter((p) => p.id !== id);

    return NextResponse.json({message: `Post with ${id} is deleted`});
    
}