import * as request from '../lib/request'

const baseUrl = 'http://localhost:3030/data/cars';

//import Item from "./models/Item";
// import mongoose from '../../node_modules/mongoose'

// mongoose.connect("mongodb://localhost/auto-bazar", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//  });

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result;
}
export const getAllCarsWithOwners= async () => {
    const query=new URLSearchParams({
        // sortBy:`price `,
      
    })
    const result = await request.get(`${baseUrl}?${query}`);
    console.log(result);
    return result;
}


export const getOne = async (carId) => {
    const result = await request.get(`${baseUrl}/${carId}`);
    return result;  
}


export const getFutureCars = async () => {
    const query=new URLSearchParams({
        sortBy:'model',
        offset: 0,
        pageSize: 2,
    })
    const result = await request.get(`${baseUrl}?${query}`);
    console.log(result);
    return result;  
}


export const getLatest = async () => {
    const query=new URLSearchParams({
        // sortBy:'make',
        offset: 0,
        pageSize: 4,
      
    })
    const result = await request.get(`${baseUrl}?${query}`);
    console.log(result);
    return result;  
}

export const sortAlfabetical = async () => {
    const query=new URLSearchParams({
        sortBy:`'_createdOn' desc`,
        offset: 0,
        pageSize: 4,
    })

    
    const result = await request.get(`${baseUrl}?${query}`);
    console.log(result);
    return result;  
}


export const create = async (data) => {
    const result = await request.post(baseUrl, data)

    return result;
}

export const edit = async (carId, data) => {
    console.log(data);
    const result = await request.put(`${baseUrl}/${carId}`, data)
console.log(result);
    return result;
}

export const remove = async (carId) => {
    await request.del(`${baseUrl}/${carId}`)
}