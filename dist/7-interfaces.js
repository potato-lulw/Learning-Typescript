"use strict";
//!interfaces
// now we can use it everwhere
const authorOne = {
    name: 'mario',
    avatar: 'avatar.png'
};
const newPost = {
    title: 'Title of the post',
    body: 'Body of the post',
    tags: ['tags', 'of', 'the', 'post'],
    createdAt: new Date(),
    // author: authorOne
    author: { name: 'luigi', avatar: 'avatar.png' }
};
// console.log(newPost);
const outputPost = (post) => {
    console.log(`Created post ${post.title}`);
    console.log(`Body: ${post.body}`);
    console.log(`Tags: ${post.tags}`);
    console.log(`Created at: ${post.createdAt}`);
    console.log(`Author: ${post.author.name}`);
};
outputPost(newPost);
