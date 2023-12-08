const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json'
        }
    }
    const token = localStorage.getItem('accessToken');
    
    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        }
    }
    return options;
}


const request = async (method, url, data) => {
    const responce = await fetch(
        url,
        {
            method,
            ...buildOptions(data)
        }
    )
   

    if (responce.status === 204) {
        return {};
    }

    const result = await responce.json();
  

    if (!responce.ok) {
        throw result
    }



    return result;


}
export const get = request.bind(null, 'GET')
export const post = request.bind(null, 'POST')
export const put = request.bind(null, 'PUT')
export const del = request.bind(null, 'DELETE')
export const patch = request.bind(null, 'PATCH')

