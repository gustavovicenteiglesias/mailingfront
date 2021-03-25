import React from 'react';
import { Button, Card, Col, Container,Jumbotron, Row } from 'react-bootstrap';
import Logo from "../components/logos";
import antes from "../assest/images/web/antes.png";
import despues from "../assest/images/web/despues.png";
//import flayer from "../assest/images/web/flayer.jpg";
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
             
            <Logo></Logo>
            
            <Col>
            <Row className="mt- mb-4">
            <Col md={6}>
            <img
                alt=""
                src={antes}
                width="80%"
                height="250"
                style={{marginLeft:"38px"}}

                /> 
            <h4 style={{textAlign:"center"}}>Planta Actual</h4>
            </Col>
            <Col md={6}>
            <img
                alt=""
                src={despues}
                width="100%"
                height="250"
                
                /> 
            <h4 style={{textAlign:"center"}}>Planta Poyectada</h4>
            </Col>
        </Row>
        <div style={{textAlign:"center",marginBottom:"30px"}}>
          
            <div style={{background:"rgba(153, 198, 187, 0.99)"}}>
            <p style={{fontWeight:"bold",color:"white "}}>
                El GOBIERNO NACIONAL –a través del ENHOSA- se encuentra impulsando la obtención de financiamiento ante el  Banco Interamericano de Desarrollo (BID) para la ampliación de  la PLANTA DE TRATAMIENTO DE EFLUENTES CLOACALES de San Antonio de Areco, por un monto de $ 1.412.574.099,64.
                En ese marco, el Municipio iniciará un proceso de actualización de la Consulta Pública realizada en diciembre de 2017 a través de una comunicación masiva virtual con el objetivo de que la comunidad conozca el proyecto, su impacto ambiental y social y las medidas de mitigación, generando además una instancia para que vecinos, vecinas y partes interesadas formulen consultas acerca del proyecto.
                En este sitio accederás a los documentos con la información relevante del proyecto, el Estudio de  Impacto Ambiental, las habilitaciones obtenidas, el informe sobre el desarrollo de la Audiencia Pública realizada en diciembre de 2017 y al formulario para formular consultas que serán contestadas por las autoridades de SANEAR y el Asistente Técnico
            </p>
            </div>
        </div>
        </Col>
        
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