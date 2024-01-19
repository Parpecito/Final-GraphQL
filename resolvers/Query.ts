import mongoose from "mongoose"
import {ContactoModelType,ContactoModel} from "../db/Contactos.ts"
import { GraphQLError } from "graphql";

export const Query = {
    getContact:async(_:unknown,args:{id:mongoose.Types.ObjectId}):Promise<ContactoModelType>=>{
        try {
            const {id}=args;
        
            const contact=await ContactoModel.findById(id);
            if(!contact){
                throw new GraphQLError("No se ha encontrado al contacto por su id");
            }

            return contact;
        } catch (error) {
            throw new GraphQLError("Error al buscar get Contact")
        }
        
    },
    getContacts:async(_:unknown):Promise<ContactoModelType[]>=>{
        const contacts=await ContactoModel.find();
        return contacts;
    }
};