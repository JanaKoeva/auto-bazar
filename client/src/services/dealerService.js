import * as request from '../lib/request';

const baseUrl='http://localhost:3030/data/dealers';

export const getAllDearers=async(_id)=>{
    const query=new URLSearchParams({
        where:`_id="${_id}"`,
        load:`car=_ownerId:cars`
    });
    const result=await request.get(`${baseUrl}?${query}`);
    return result;
    
}

export const getDealerById = async (username) => {
    const query=new URLSearchParams({
        where:`_id="${username}"`,
        load:`car=_ownerId:cars`
    });
    try {

      const response = await request.get(`${baseUrl}${query}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching dealer by username:', error);
      throw error;
    }
  };

export const create= async(carId, text)=>{
    const newCar=request.post(baseUrl,{
        carId,
        text
    });
    return newCar;
    }
