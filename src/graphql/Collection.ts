import { extendType, nonNull, objectType, stringArg } from "nexus";  
import { NexusGenObjects } from "../../nexus-typegen";  

export const Collections = objectType({
    name: "Collection", // <- Name of your type
    definition(t) {
        t.nonNull.int("id"); 
        t.nonNull.string("title"); 
       t.nonNull.string("author");
       t.nonNull.string("authorEmail");
       t.nonNull.string("description")
    },
});


export const CollectionQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("allCollections", {
            type: "Collection",
            resolve(_root, _args, ctx) {
                return ctx.prisma.Collection.findMany();
            },
        });
    },

});

export const CollectionMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("createCollection", {
            type: "Collection",
            args: {
                Title: nonNull(stringArg()),
                Author: nonNull(stringArg()),
    },
            resolve(_root, args, ctx) {
                const newCollection = ctx.prisma.collection.create({
                    data: {
                        Title: args.Title,
                        Author: args.Author,
                    }
                });
                return newCollection;
            }
})
    },
});



