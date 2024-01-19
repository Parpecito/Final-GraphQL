
const apiKey="7IGRXD47z0YpBZ5PXf9d5w==NfoCamIjGVHc77rE"
const options={
    method:"GET",
    headers:{
        "x-api-key":apiKey
    },
}

export const Checktelephone=async(number:string):Promise<Boolean>=>{

    const url="https://api.api-ninjas.com/v1/validatephone?number="+number;

    const response= await fetch(url,options);
    if(response.status===200){
        return true;
    }
    return false;
}
