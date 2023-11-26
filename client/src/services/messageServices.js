import * as request from '../lib/request';

const baseUrl='http://localhost:3030/jsonstore/messages';

export const getAll=async()=>{
    const result=await request.get(baseUrl);
    console.log(Object.values(result));
    return Object.values(result)
}


export const create= async(carId,userName, text)=>{
const newMessage=request.post(baseUrl,{
    carId,
    userName,
    text
});
return newMessage;
}