import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

    const project1 = await prisma.project.upsert({
        where: {slug: 'Project 1'},
        update: {},
        create: {
            slug: 'Project 1',
            title: 'Description project 1',
            body: 'Body project 1',
        }
    })
    const technology1 = await prisma.technologie.upsert({
        where: {name: 'React'},
        update: {},
        create: {
            name: 'React',
            icon: 'icon1'
        }
    })
    const adr1 = await prisma.adress.upsert({
        where: {street: 'rue de la paix'},
        update: {},
        create: {
            street: 'rue de la paix',
            city: 'Paris',
            state: 'France',
            zip: '75000',
        }
    })
    const user1 = await prisma.user.upsert({
        where: {email: 'damienchapart@gmail.com'},
        update: {},
        create: {
            email: 'damienchapart@gmail.com',
            name: 'Damien Chapart',
            address: {connect: {street: adr1.street}},
        }
    })
    const post1 = await prisma.post.upsert({
        where: {slug: 'post1'},
        update: {},
        create: {
            slug: 'post1',
            title: 'Post 1',
            description: 'Description post 1',
            body: 'Body post 1',
            createdAt: new Date(),
            nbLikes: 0,
            nbViews: 0,
            icon: "icon1",
            author: {connect: {email: user1.email}},
        }
    })




}
main()