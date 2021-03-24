import React from 'react';
import { Button, Card, Col, Container,Jumbotron, Row } from 'react-bootstrap';



class Home extends React.Component{
    constructor(props){
        super(props);
       this.state = {
           link:[
            {href:'resumendeobra',title1:'1-RESUMEN DE OBRA'},
            {href:'eias',title1:'2-ESTUDIO DE IMPACTO AMBIENTAL Y SOCIAL'},
            {href:'informe',title1:'3-INFORME DE LA CONSULTA PUBLICA AÑO 2017'},
            {href:'habilitaciones',title1:'4-HABILITACIONES Y PERMISOS'},
            {href:'faq',title1:'5-PREGUNTAS FRECUENTES'}
          ]
          };
  }
   
   
  
render(){
    return(
        <Container>
        <div style={{textAlign:"center",marginBottom:"30px"}}>
           <h3>AMPLIACIÓN DE PLANTA DE TRATAMIENTO DE EFLUENTES CLOACALES DE SAN ANTONIO DE ARECO</h3>
        </div>
        {this.state.link.map((data,i)=>{

            return(
                <Col md={12} className="py-2" >
                <Button block='true' variant="info"
                
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
export default Home;