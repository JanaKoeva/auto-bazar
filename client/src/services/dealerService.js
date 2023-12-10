import * as request from '../lib/request';

const baseUrl='http://localhost:3030/data/dealers';

export const getAll=async(_id)=>{
    const query=new URLSearchParams({
        where:`_id="${_id}"`,
        load:`car=_ownerId:cars`
    });
    const result=await request.get(`${baseUrl}?${query}`);
    return result;
    
}
export const create= async(carId, text)=>{
    const newCar=request.post(baseUrl,{
        carId,
        text
    });
    return newMessage;
    }
