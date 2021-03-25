import React from 'react';
import { Button, Card, Col, Container,Jumbotron, Row } from 'react-bootstrap';
import declaracion from "../assest/pdfs/6. Declaracion EIA.PDF";
import electrica from "../assest/pdfs/8. Factibilidad Electrica.pdf";
import pre from "../assest/pdfs/CE-2020-29207995-GDEBA-DPGHADA certificado complementario (3).pdf";
import Logo from "../components/logos";
import camiones from "../assest/pdfs/10. Resolucion para Vuelco de Camiones Atmosfericos.pdf";


class Habilitaciones extends React.Component{
    constructor(props){
        super(props);
       this.state = {
        link:[
            {href:declaracion,title1:'a. Declaración de impacto ambiental (declaracio EIA.PDF)'},
            {href:electrica,title1:'b. Factibilidad eléctrica'},
            {href:pre,title1:'c. Prefactibilidad de Vuelco de Efluentes Líquidos Cloacales diciembre de 2020 (CE – 2020-29207995-DGEBA-DPGHADA)'},
            {href:camiones,title1:'d. Autorización vuelco camiones'},
            
            
          ]
          };
  }
   
   
  
render(){
    return(
        
        <Container>
           
        <div style={{textAlign:"center",marginBottom:"30px"}}>
          
           <h3>HABILITACIONES Y PERMISOS</h3>
        </div>
        <Logo></Logo>
        {this.state.link.map((data,i)=>{

            return(
                <Col md={12} className="py-2" >
                <Button block='true' variant="info"
                target="_blank"
                 href={data.href} 
                 style={{background:'rgb(226, 214, 130,0.75)', color:'black',minHeight:"90px"}}>
                  <i aria-hidden="true" className="far fa-map pr-1"></i>
                  <span>{data.title1}</span>
                </Button>
                </Col> 
             ) })
                
            }
        </Container>
    )
}

}
export default Habilitaciones;