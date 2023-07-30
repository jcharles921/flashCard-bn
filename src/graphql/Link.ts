import { extendType, nonNull, objectType, stringArg } from "nexus";  
import { NexusGenObjects } from "../../nexus-typegen";  

export const Collections = objectType({
    name: "Collection", // <- Name of your type
    definition(t) {
        t.nonNull.int("id"); 
        t.nonNull.string("Title"); 
       t.nonNull.string("Author")
     
    },
});
export const Card = objectType({
    name:"Card",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("question");
        t.nonNull.string("response");
        t.nonNull.string("hint");
        t.nonNull.string("CollectionName")


    },

})

let links: NexusGenObjects["Link"][]= [   // 1
    {
        id: 1,
        url: "www.howtographql.com",
        description: "Fullstack tutorial for GraphQL",
    },
    {
        id: 2,
        url: "graphql.org",
        description: "GraphQL official website",
    },
];

export const LinkQuery = extendType({  // 2
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("feed", {   // 3
            type: "Link",
            resolve(parent, args, context, info) {    // 4
                return links;
            },
        });
    },
});

export const LinkMutation = extendType({  // 1
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("post", {  // 2
            type: "Link",  
            args: {   // 3
                description: nonNull(stringArg()),
                url: nonNull(stringArg()),
            },
            
            resolve(parent, args, context) {    
                const { description, url } = args;  // 4
                
                let idCount = links.length + 1;  // 5
                const link = {
                    id: idCount,
                    description: description,
                    url: url,
                };
                links.push(link);
                return link;
            },
        });
    },
});
