import React from 'react';
import Servicio from "../service/consultas"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,
    CartesianGrid, XAxis,YAxis, Tooltip, Legend,Bar,BarChart, Label, LabelList } from "recharts";
import { Container } from 'react-bootstrap';
import Barra from "../components/Barra"

class Estadistica extends React.Component{
    constructor(props){
        super(props);
        
        
        this.state = {
            data:[],
            COLORS : ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#006400','#8B0000'],
            barra:false
          };
         
   }
  
   async componentDidMount(){

       for (let i = 1; i <7; i++) {
           let color=this.state.COLORS[i];
           let pregunta="pregunta"+i
           const res=await Servicio.getPregunta(i)
           if (res.success) {
            this.setState(state=>state.data.push({name:pregunta,
                value:res.data.cantidad})) 
           }
        
           
       }
       console.log(this.state.data);
    }
    
    render(){
        const COLORS=this.state.COLORS
        const data=this.state.data
        const barra=this.state.barra
        return(
           <Container>
               <ResponsiveContainer width="100%" height={400}>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                
                labelLine={false}
                label={true}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                
                {data.map((entry, index) => (
                  
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} >
                  
                </Cell>
                  
                ))}
                
              </Pie>
            </PieChart>
            </ResponsiveContainer>
           
            <Barra></Barra>
           </Container>
           
           
         
        )
    }
}
 export default Estadistica;