import {ContactoModelType,ContactoModel} from "../db/Contactos.ts"
import { GraphQLError } from "graphql";
import {getDatos} from "../lib/getdatos.ts"

import mongoose from "mongoose"



export const Mutation = {
    addContact: async(_:unknown,args:{nombre_apellidos:string,number:string}):Promise<ContactoModelType> => {
        try {
            const{nombre_apellidos,number}=args;

            const contact=new ContactoModel({
                nombre_apellidos,
                number
            })
            await contact.save();
            return contact;
        } catch (error) {
            throw new GraphQLError(error.message);
        }
        
    },
    deleteContact:async(_:unknown,args:{id:mongoose.Types.ObjectId}):Promise<boolean>=>{
        try {
            const {id}=args
            const contacto=await ContactoModel.findOneAndDelete(id);

            if(!contacto){
                return false
            }
            return true;
        } catch (_error) {
            return false;
        }
    },
    updateContact:async(_:unknown,args:{id:mongoose.Types.ObjectId,nombre_apellidos:string,number:string}):Promise<ContactoModelType>=>{
        try {
            const {id,nombre_apellidos,number}=args;
            const contact=await ContactoModel.findByIdAndUpdate(id,{nombre_apellidos,number},{new:true});

            if(!contact){
                throw new GraphQLError("No se ha encontrado el id para actualizar")
            }
            const {country}=await getDatos(number);
            contact.country=country;
            return contact;
        } catch (error) {
            throw new GraphQLError(error.message)
        }
    }
};