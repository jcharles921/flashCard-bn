import { extendType, nonNull, objectType, stringArg } from "nexus";  

export const Card = objectType({
    name:"Card",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("question");
        t.nonNull.string("response");
        t.nonNull.string("hint");
       
    },

})