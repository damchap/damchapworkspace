import prisma from '../lib/prisma'
export const resolvers = {
    Query: {
        allUsers: async () => {
            return await prisma.user.findMany()
        }
    }
}