import * as request from '../lib/request'

const baseUrl = 'http://localhost:3030/jsonstore/cars';

//import Item from "./models/Item";
// import mongoose from '../../node_modules/mongoose'

// mongoose.connect("mongodb://localhost/auto-bazar", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//  });

export const getAll = async () => {
    const responce = await request.get(baseUrl);
    return Object.values(responce);
}
export const getOne = async (carId) => {
    const result = await request.get(`${baseUrl}/${carId}`);
    return result;
   
}

export const create = async (data) => {
    const result = await request.post(baseUrl, data)

    return result;
}