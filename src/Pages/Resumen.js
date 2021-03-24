import React from 'react';
import { Button, Card, Col, Container,Jumbotron, Row } from 'react-bootstrap';
import resumen from "../assest/pdfs/Resumen de la obra.pptx";
import fotografico from "../assest/pdfs/2. AnexoFotográfico.pdf";
import pca from "../assest/pdfs/4. PCA EIA SanAntonio.pdf";
import analisis from "../assest/pdfs/2021-03-02-Areco-Analisis de precio (2).pdf";
import proyeccion from "../assest/pdfs/9. Proyeccion Poblacional 2040.pdf";
class Resumen extends React.Component{
    constructor(props){
        super(props);
       this.state = {
        link:[
            {href:resumen,title1:'a. Resumen de la obra (PPT)'},
            {href:fotografico,title1:'b. Anexo fotográficoL'},
            {href:'https://drive.google.com/file/d/1iPgBVb45wzRTeFDRlP-QDG28bAbDV-89/view?usp=sharing',title1:'c. Planta de Tratamiento – Recorrido (animación digital)'},
          
          ]
          };
  }
   
   
  
render(){
    return(
        <Container>
        <div style={{textAlign:"center",marginBottom:"30px"}}>
          
           <h3>RESUMEN DE LA OBRA</h3>
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
export default Resumen;