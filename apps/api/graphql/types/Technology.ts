import { builder } from "../builder";
builder.prismaObject('Technologie', {
    fields: (t) => ({
        id: t.exposeID('id'),
        name: t.exposeString('name'),
        icon : t.exposeString('icon'),
        posts: t.relation('posts'),
    })
});
builder.queryField("Technologies", (t) =>
    t.prismaField({
        type: ['Technologie'],
        resolve: (query, _parent, _args, _ctx, _info) =>
            prisma.technologie.findMany({ ...query })
    })
)