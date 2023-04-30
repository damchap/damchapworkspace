import { builder } from "../builder";
builder.prismaObject('User', {
    fields: (t) => ({
        id: t.exposeID('id'),
        email: t.exposeString('email', { nullable: true, }),
        name: t.exposeString('name'),
        adress: t.relation('address'),
        posts: t.relation('posts'),
    })
});

builder.queryField("Users", (t) =>
    t.prismaField({
        type: ['User'],
        resolve: (query, _parent, _args, _ctx, _info) =>
            prisma.user.findMany({ ...query })
    })
)