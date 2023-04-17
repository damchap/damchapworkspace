import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import {prisma} from "@/prisma/db";
import {PrismaClient} from "@prisma/client";

export type Context = {
    prisma: PrismaClient;
};

const typeDefs = `#graphql
    type User {
        id: String!
        email: String!
        name: String!
        adress: Adress!
        posts: [Post!]!
    }
    type Adress {
        street: String!
        city: String!
        state: String!
        zip: String!
        user: [User!]!
    }
    type Technology {
        id: String!
        name: String!
        icon: String!
        posts: [Post!]!
    }
    type Comment {
        id: String!
        comment: String!
        post: Post!
    }
    type Post {
        id: String!
        slug: String!
        title: String!
        description: String!
        body: String!
        createdAt: String!
        nbLikes: Int!
        nbViews: Int!
        icon: String
        author: User!
        authorId: String!
        technologies: [Technology!]!
        comments: [Comment!]!
        
    }
    type Query {
        posts: [Post]
    }
`;
const resolvers = {
    Query: {
        post: async ({parent, args, context}: { parent: any, args: any, context: Context }) => {
            return context.prisma.post.findMany();
        }
    },
};

const apolloServer = new ApolloServer<Context>({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(apolloServer, {
    context: async (req, res) => ({ req, res, prisma }),
});