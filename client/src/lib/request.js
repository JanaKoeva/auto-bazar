const buildOptions=(data)=>{
    const options={};

    if(data){
        options.body=JSON.stringify(data);
        options.headers={
            'content-type':'application/json'
        }
    }
    return options;
}


const request=async(method, url,data)=>{
    const responce=await fetch(
        url,
        {
            method,
            ...buildOptions(data)
        }  
    )
    if(!responce.ok){
        throw new Error('Error fetch')
    }else{
        const result=await responce.json();
        return result;
    }
    
}
export const get=request.bind(null, 'GET')
export const post=request.bind(null, 'POST')
export const put=request.bind(null, 'PUT')
export const del=request.bind(null, 'DELETE')
export const patch=request.bind(null, 'PATCH')

