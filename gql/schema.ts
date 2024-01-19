export const typeDefs = `#graphql
    type Contacto{
        id:ID!,
        nombre_apellidos:String!,
        number:String!,
        country:String!
    }


    type Query {
        getContact(id:ID!):Contacto!,
        getContacts:[Contacto!]!
    },

    type Mutation { 
        addContact(nombre_apellidos:String!,number:String!):Contacto!,
        deleteContact(id:ID!):Boolean!,
        updateContact(id:ID!,nombre_apellidos:String,number:String):Contacto!
    }

`;
