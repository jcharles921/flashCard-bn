import { extendType, nonNull, objectType, stringArg,intArg } from "nexus";  
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Card = objectType({
    name:"Card",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("question");
        t.nonNull.string("response");
        t.nonNull.string("hint");
        t.nonNull.string("title");
    },

})
export const CardQuery = extendType({
    type: "Query",
    definition(t) {
      t.nonNull.list.nonNull.field("allCards", {
        type: "Card",
        resolve(_root, _args, ctx) {
          return ctx.prisma.card.findMany();
        },
      });
    },
  });
  export const CreateCard = extendType({
    type: "Mutation",
    definition(t) {
      t.nonNull.field("createCard", {
        type: "Card",
        args: {
          question: nonNull(stringArg()),
          response: nonNull(stringArg()),
          hint: nonNull(stringArg()),
          title: nonNull(stringArg()),
        },
        resolve(_root, args, ctx) {
          const newCard = ctx.prisma.card.create({
            data: {
              question: args.question,
              response: args.response,
              hint: args.hint,
              title: args.title,
            },
          });
          return newCard;
        },
      });
    },
  });
  
  export const UpdateCard = extendType({
    type: "Mutation",
    definition(t) {
      t.nonNull.field("updateCard", {
        type: "Card",
        args: {
          id: nonNull(intArg()),
          question: stringArg(),
          response: stringArg(),
          hint: stringArg(),
          title: stringArg(),
        },
        resolve(_root, args, ctx) {
          return ctx.prisma.card.update({
            where: { id: args.id },
            data: {
              question: args.question,
              response: args.response,
              hint: args.hint,
              title: args.title,
            },
          });
        },
      });
    },
  });
  
  export const DeleteCard = extendType({
    type: "Mutation",
    definition(t) {
      t.nonNull.field("deleteCard", {
        type: "Card",
        args: {
          id: nonNull(intArg()),
        },
        resolve(_root, args, ctx) {
          return ctx.prisma.card.delete({
            where: { id: args.id },
          });
        },
      });
    },
  });
  