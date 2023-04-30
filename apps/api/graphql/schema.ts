/**export const typeDefs = `
    type post {
        id: String
        slug: String
        title: String
        description: String
        body: String
        createdAt: String
        nbLikes: Int
        nbViews: Int
        icon: String
        author: user
        technologies: [technology]!
        comments: [comment]!
    }
    type technology {
        id: String
        name: String
        icon: String
        posts: [post]!
    }
    type user {
        id: String
        email: String
        name: String
        adress: adress!
        posts: [post]!
    }

    type comment {
        id: String
        comment: String
        post: post!
    }
    type adress {
        id: String
        street: String
        city: String
        state: String
        zip: String
        user: [user]!
    }
    type Query {
        allUsers: [user!]!
        allPosts: [post!]!
        allTechnologies: [technology!]!
        allComments: [comment!]!
        allAdresses: [adress!]!
    }
    type Mutation {
        createPost(slug: String, title: String, description: String, body: String, createdAt: String, nbLikes: Int, nbViews: Int, icon: String, authorId: String): post!
        createTechnology(name: String, icon: String): technology!
        createUser(email: String, name: String, adressId: String): user!
        createComment(comment: String, postId: String): comment!
        createAdress(street: String, city: String, state: String, zip: String): adress!
        updatePost(id: String, slug: String, title: String, description: String, body: String, createdAt: String, nbLikes: Int, nbViews: Int, icon: String, authorId: String): post!
        updateTechnology(id: String, name: String, icon: String): technology!
        updateUser(id: String, email: String, name: String, adressId: String): user!
        updateComment(id: String, comment: String, postId: String): comment!
        updateAdress(id: String, street: String, city: String, state: String, zip: String): adress!
        deletePost(id: String): post!
        deleteTechnology(id: String): technology!
        deleteUser(id: String): user!
        deleteComment(id: String): comment!
        deleteAdress(id: String): adress!
    }
`;**/

import "./types/Adress"
import "./types/User"
import "./types/Post"
import "./types/Comment"
import "./types/Technology"

import { builder } from "./builder";

export const schema = builder.toSchema()