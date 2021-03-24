import React ,{useEffect, useState}from 'react';
import Servicio from "../service/consultas"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,
    CartesianGrid, XAxis,YAxis, Tooltip, Legend,Bar,BarChart, Label, LabelList } from "recharts";
import { Container } from 'react-bootstrap';

const getData= async ()=>{
    const dato=[];
    for (let i = 1; i <7; i++) {
        
        let pregunta="pregunta"+i
        const res= await Servicio.getPregunta1(i)
         console.log("Res")
          console.log(res)
        if (res.success) {
         dato.push({name:pregunta,
             value:res.data.cantidad})
        }
        console.log("getDato")
        console.log(dato)
        
    }
    return dato
}

const  COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#006400','#8B0000'];

const Barra1=()=>{
   
 const  [data,setData]=useState();
 
 useEffect(  () => {
     const d=getData()
    setData(d)
 }, [0])
    
    return(
        <ResponsiveContainer width="100%" height={400}>
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Label></Label>
            <Bar dataKey="value"  >
            {
  data.map((entry, index) => (
    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} strokeWidth={index === 2 ? 4 : 1} />
  ))
}   </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}
export default  Barra1;