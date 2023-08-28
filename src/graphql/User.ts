import { extendType, nonNull, objectType, stringArg, intArg } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.string("password");
    t.nonNull.string("name");
    t.nonNull.string("email");
  },
});

export const CreateUser = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createUser", {
      type: "User",
      args: {
        name: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve(_root, args, ctx) {
        const newUser = ctx.prisma.user.create({
          data: {
            name: args.name,
            email: args.email,
            password: args.password,
          },
        });
        return newUser;
      },
    });
  },
});
export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.field("user", {
      type: "User",
      args: {
        id: nonNull(intArg()),
      },
      resolve(_root, args, ctx) {
        return ctx.prisma.user.findUnique({
          where: { id: args.id },
        });
      },
    });
  },
});

export const UpdateUser = extendType({
  type: "Mutation",
  definition(t) {
    // ... (other mutations)

    t.nonNull.field("updateUser", {
      type: "User",
      args: {
        id: nonNull(intArg()),
        name: stringArg(),
        email: stringArg(),
        password: stringArg(),
      },
      resolve(_root, args, ctx) {
        return ctx.prisma.user.update({
          where: { id: args.id },
          data: {
            name: args.name,
            email: args.email,
            password: args.password,
          },
        });
      },
    });
  },
});

export const DeleteUser = extendType({
  type: "Mutation",
  definition(t) {
    // ... (other mutations)

    t.nonNull.field("deleteUser", {
      type: "User",
      args: {
        id: nonNull(intArg()),
      },
      resolve(_root, args, ctx) {
        return ctx.prisma.user.delete({
          where: { id: args.id },
        });
      },
    });
  },
});
