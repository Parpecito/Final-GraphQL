import mongoose from "mongoose"
import {Contacto} from "../types.ts"
import {Checktelephone} from "../lib/checktelephone.ts"

const Schema=mongoose.Schema;

const ContactoSchema=new Schema(
    {
        nombre_apellidos:{type:String,required:true},
        number:{type:String,required:true,unique:true},
        country:{type:String,required:false},
        hora:{type:String, required:false}
    }
)

ContactoSchema.path('number').validate(async function (telephone:string) {
    try {
        console.log("Estoy ejecutando la validación")
        return await Checktelephone(telephone);
    } catch (_error) {
        return false;
    }
})

export type ContactoModelType=mongoose.Document&Omit<Contacto,"id">
export const ContactoModel=mongoose.model<ContactoModelType>("Contacto",ContactoSchema)