export type Datos={
    country:string
}

const apiKey="7IGRXD47z0YpBZ5PXf9d5w==NfoCamIjGVHc77rE"

const options={
    method:"GET",
    headers:{
        "x-api-key":apiKey
    },
}


export const getDatos=async(number:string):Promise<Datos>=>{
    const url="https://api.api-ninjas.com/v1/validatephone?number="+number;

    const response= await fetch(url,options);
    if(response.status!==200){
        throw new Error("Telefono no encontrado")
    }
   
    const data=await response.json()
    console.log(data);
    const country=data.country;
    console.log(country);
    return country;
    
}