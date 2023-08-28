import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { createContext } from "./context";

export const server = new ApolloServer({
  schema,
  context: createContext,
});
const path = "api";
const port = 4000 || process.env.PORT;
server.listen({ path,port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}${path}`);
});
