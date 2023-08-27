import { extendType, nonNull, objectType, stringArg,intArg } from "nexus";  
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
                return ctx.prisma.collection.findMany();
            },
        });
    },

});

export const CreateCollection = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("createCollection", {
            type: "Collection",
            args: {
                title: nonNull(stringArg()),
                authorEmail: nonNull(stringArg()),
                description: nonNull(stringArg()),
    },
            resolve(_root, args, ctx) {
                const newCollection = ctx.prisma.collection.create({
                    data: {
                        title: args.title,
                        authorEmail: args.authorEmail,
                        description: args.description,
                    }
                });
                return newCollection;
            }
})
    },
});


export const DeleteCollections = extendType({
    type: "Mutation",
    definition(t) {
      t.nonNull.field("deleteCollection", {
        type: "Collection",
        args: {
          id: nonNull(intArg()),
        },
        resolve(_root, args, ctx) {
          return ctx.prisma.collection.delete({
            where: { id: args.id },
          });
        },
      });
    },
  });
  
  export const UpdateCollection = extendType({
    type: "Mutation",
    definition(t) {
      t.nonNull.field("updateCollection", {
        type: "Collection",
        args: {
          id: nonNull(intArg()),
          title: stringArg(),
          description: stringArg(),
        },
        resolve(_root, args, ctx) {
          return ctx.prisma.collection.update({
            where: { id: args.id },
            data: {
              title: args.title,
              description: args.description,
            },
          });
        },
      });
    },
  });
  