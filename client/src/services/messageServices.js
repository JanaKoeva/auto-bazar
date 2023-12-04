import * as request from '../lib/request';

const baseUrl='http://localhost:3030/data/messages';

export const getAll=async(carId)=>{
    const query=new URLSearchParams({
        where:`carId="${carId}"`,
        load:`owner=_ownerId:users`
    });
    const result=await request.get(`${baseUrl}?${query}`);
    console.log((result));
    return result;
    
}


export const create= async(carId, text)=>{
const newMessage=request.post(baseUrl,{
    carId,
    text
});
return newMessage;
}