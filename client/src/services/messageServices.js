import * as request from '../lib/request';

const baseUrl='http://localhost:3030/jsonstore/messages';

export const getAll=async(carId)=>{
    const query=new URLSearchParams({
        where:`carId="${carId}"`
    });
    const result=await request.get(`$baseUrl?${query}`);
    console.log(Object.values(result));
    return Object.values(result).filter(message=>message.carId === carId)
}


export const create= async(carId,userName, text)=>{
const newMessage=request.post(baseUrl,{
    carId,
    userName,
    text
});
return newMessage;
}