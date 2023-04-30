import { builder } from "../builder";
builder.prismaObject('Comment', {
    fields: (t) => ({
        id: t.exposeID('id'),
        comment: t.exposeString('comment'),
        post: t.relation('post'),
    })
});
builder.queryField("Comments", (t) =>
    t.prismaField({
        type: ['Comment'],
        resolve: (query, _parent, _args, _ctx, _info) =>
            prisma.comment.findMany({ ...query })
    })
)