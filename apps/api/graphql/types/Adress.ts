import { builder } from "../builder";
builder.prismaObject('Adress', {
    fields: (t) => ({
        id: t.exposeID('idAdress'),
        street: t.exposeString('street'),
        city: t.exposeString('city'),
        state: t.exposeString('state'),
        zip: t.exposeString('zip'),
        user: t.relation('User'),
    })
});
builder.queryField("Adresss", (t) =>
    t.prismaField({
        type: ['Adress'],
        resolve: (query, _parent, _args, _ctx, _info) =>
            prisma.adress.findMany({ ...query })
    })
)