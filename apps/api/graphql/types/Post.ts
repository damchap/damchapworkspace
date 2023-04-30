import { builder } from "../builder";
builder.prismaObject('Post', {
    fields: (t) => ({
        id: t.exposeID('id'),
        slug: t.exposeString('slug'),
        title: t.exposeString('title'),
        description: t.exposeString('description'),
        body: t.exposeString('body'),
        createdAt: t.field({type: 'String', nullable: true, resolve: () => null}),
        nbLikes: t.exposeInt('nbLikes'),
        nbViews: t.exposeInt('nbViews'),
        icon: t.exposeString('icon'),
        author: t.relation('author'),
        comments: t.relation('comments'),
        technologies: t.relation('technologies'),
    })
});
builder.queryField("posts", (t) =>
    t.prismaField({
        type: ['Post'],
        resolve: (query, _parent, _args, _ctx, _info) =>
            prisma.post.findMany({ ...query })
    })
)
