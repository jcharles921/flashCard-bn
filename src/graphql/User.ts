import { extendType, nonNull, objectType, stringArg } from "nexus";  

export const User = objectType({
    name:"User",
    definition(t) {
        t.nonNull.string("password");
        t.nonNull.string("name");
        t.nonNull.string("email");    
    },

})