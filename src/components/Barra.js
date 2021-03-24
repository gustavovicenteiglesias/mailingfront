import React from 'react';
import Servicio from "../service/consultas"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,
    CartesianGrid, XAxis,YAxis, Tooltip, Legend,Bar,BarChart, Label, LabelList } from "recharts";
import { Container } from 'react-bootstrap';


class Barra extends React.Component{
    constructor(props){
        super(props);
        this.getData=this.getData.bind(this);
        this.chartReference = React.createRef();
        this.state = {
            data:[],
            COLORS : ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#006400','#8B0000']
          };
   }
   async getData(){
    for (let i = 1; i <7; i++) {
        
        let pregunta="pregunta"+i
        const res= await Servicio.getPregunta1(i)
        if (res.success) {
         this.setState(state=>state.data.push({name:pregunta,
             value:res.data.cantidad})) 
        }
     
        
    }
    console.log(this.state.data);
   }
  
  componentDidMount(){
      this.getData();
      console.log(this.chartReference);
     
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState !== this.state) {
        console.log(prevState)
        console.log("propiedades")
        console.log(this.chartReference.current.props)

       console.log("Distinto")
    }else {console.log("Igual")}
  }

   
   
    
    render(){
        const COLORS=this.state.COLORS
        const data=this.state.data
        return(
         
        
           
           
            <ResponsiveContainer width="100%" height={400}>
            <BarChart width={730} height={250} ref={this.chartReference} data={data}>
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
}
 export default Barra;