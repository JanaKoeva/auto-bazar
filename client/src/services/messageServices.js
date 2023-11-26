import * as request from '../lib/request';

const baseUrl='http://localhost:3030/jsonstore/messages';

expot const create= async(carId,userName, text)=>{
const newMessage=request.post(baseUrl,{
    carId,
    username,
    
})
}