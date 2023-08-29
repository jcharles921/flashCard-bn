import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { createContext } from "./context";

export const server = new ApolloServer({
  schema,
  context: createContext,
  introspection: true,
});


server.listen({ port:process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
