import React from 'react';
import { Button, Card, Col, Container,Jumbotron, Row } from 'react-bootstrap';
import Barrio from "../assest/pdfs/3. EIA - Anexo I Barrio Don Pancho.pdf";


class Eias extends React.Component{
    constructor(props){
        super(props);
       this.state = {
        link:[
            {href:'Https://drive.google.com/file/d/1uqd3soUNRHeojCDvXBnehGO2wu9MU3yY/view?usp=sharing',title1:'a. EIA - BID v_07-Completo con Anexos-Firmado.pdf'},
            {href:Barrio,title1:'b.Estudio de Impacto Ambiental Barrio Don PanchoL'}
          ]
          };
  }
   
   
  
render(){
    return(
        <Container>
        <div style={{textAlign:"center",marginBottom:"30px"}}>
          
           <h3>ESTUDIO DE IMPACTO AMBIENTAL Y SOCIAL</h3>
        </div>
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
export default Eias;