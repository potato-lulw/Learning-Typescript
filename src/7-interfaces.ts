//!interfaces

// custom types 
// certain structure others can adhere to

interface Author {
    name: string,
    avatar: string
}

// now we can use it everwhere

const authorOne: Author = {
    name: 'mario',
    avatar: 'avatar.png'
};

interface Post {
    title: string,
    body: string,
    tags: string[],
    createdAt: Date,
    author: Author // nested interface
}

const newPost: Post = {
    title: 'Title of the post',
    body: 'Body of the post',
    tags: ['tags', 'of', 'the', 'post'],
    createdAt: new Date(),
    // author: authorOne
    author: {name: 'luigi', avatar: 'avatar.png'}
}

// console.log(newPost);

const outputPost = (post: Post): void => {
    console.log(`Created post ${post.title}`);
    console.log(`Body: ${post.body}`);
    console.log(`Tags: ${post.tags}`);

    console.log(`Created at: ${post.createdAt}`);
    console.log(`Author: ${post.author.name}`);

}

outputPost(newPost);

// using interfaces with arrays

let post: Post[] = [newPost];