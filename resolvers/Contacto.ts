import {ContactoModelType,ContactoModel} from "../db/Contactos.ts"
import {getDatos} from "../lib/getdatos.ts"
export const Contacto={
    country:async(parent:ContactoModelType):Promise<string>=>{
        console.log("Calculando ciudad");
        const number=parent.number;
        const data= await getDatos(number);
        console.log(data);
        return data.country;
    }
}