import React from 'react';
import { Button, Card, Col, Container,Jumbotron, Row } from 'react-bootstrap';
import informe from "../assest/pdfs/Anexo XII - Informe de consulta pública (1).pdf";


class Informe extends React.Component{
    constructor(props){
        super(props);
       this.state = {
        link:[
            {href:informe,title1:'a. Anexo XII, informe de la audiencia publica'}
            
          ]
          };
  }
   
   
  
render(){
    return(
        <Container style={{minHeight:'400px'}}>
        <div style={{textAlign:"center",marginBottom:"30px"}}>
          
           <h3> INFORME DE LA CONSULTA PUBLICA AÑO 2017</h3>
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
export default Informe;