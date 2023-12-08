export default function pathToUrl(path, params){
const url=Object.keys(params).reduce((result,param)=>{
    result.replace(`:${param}`, params[param])
},path);
console.log(url);
return url;
}