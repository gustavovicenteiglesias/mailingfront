
import axios from "axios"
import IP from "public-ip";
const anonimo={};
anonimo.enviar=async(values)=>{
    const datos={
        id:0,
        email:"participacionciudadana@areco.gob.ar",
        content:{
            id_cuerpo:0,
            email:values.email,
            nombre:values.fullname,
            ip:await IP.v4(),
            
            texto:values.texto
            },
            subject:"Sanear Web Consulta",
            id_cuerpo:0
            }
     console.log("Datos");   
     console.log(datos);     
    const urlGet = "http://areco.gob.ar:9527/email/send";
    const res = await axios.post(urlGet,datos)
    .then(response=> {return response.data })
    .catch(error=>{ return error; })
    return res;
}
anonimo.getPregunta=async (id)=>{
    const UrlGETPregunta="http://areco.gob.ar:9527/email/get/ultimo/pregunta"+id;
    const res = await axios.get(UrlGETPregunta)
    .then(response=> {return response.data })
    .catch(error=>{ return error; })
    return res;
}
anonimo.getPregunta1= async (id)=>{
    const UrlGETPregunta="http://areco.gob.ar:9527/email/get/ultimo/pregunta"+id;
    const res = await axios.get(UrlGETPregunta)
    .then(response=> {return response.data })
    .catch(error=>{ return error; })
    return res;
}
anonimo.postPregunta=async(values)=>{
    const datos={
        id:0,
        cantidad:values.cantidad+1
            }
     console.log("Datos");   
     console.log(datos);     
    const urlGet = "http://areco.gob.ar:9527/email/send/pregunta"+values.id;
    const res = await axios.post(urlGet,datos)
    .then(response=> {return response.data })
    .catch(error=>{ return error; })
    return res;
}
export default anonimo;