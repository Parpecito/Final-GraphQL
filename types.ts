import mongoose from "mongoose"
export type Contacto={
    nombre_apellidos:string,
    number:string,
    country:string,
    id:mongoose.Types.ObjectId;
}