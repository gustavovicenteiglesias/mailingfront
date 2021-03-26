import React from 'react';
import { Button, Card, Col, Container,Jumbotron, Row } from 'react-bootstrap';
import Formulario from "../components/formulario";
import IP from "public-ip";
import update from 'react-addons-update';
import desplegar from "../assest/images/web/desplegable.png";
import data from "../components/preguntas.json"
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Servicio from "../service/consultas";
import Logo from "../components/logos";
class Home extends React.Component{
    constructor(props){
        super(props);
        this.desplegar=this.desplegar.bind(this);
         
        this.state = {
           visible:[true,true,true,true,true,true,true,true,true,true,true,true],
          };
            
   }
   
   
   async desplegar(i){
    const res=await Servicio.getPregunta(i);
    if(res.success){
        const datos={
            id:i,
            cantidad:res.data.cantidad
        }
        console.log(datos);
        const res1=await Servicio.postPregunta(datos);
        if(res1)console.log("exitoso");
    }
    
    this.setState(update(this.state, {
        visible: {
            [i]: {
                $set: false
            }
        }
    }));
    }
    async componentDidMount(){
        console.log(await IP.v4())
    }
render(){
    return(
        <Container style={{minHeight:"450px"}}>
           
            <div style={{textAlign:"center",marginBottom:"30px"}}><h3>AMPLIACIÓN DE PLANTA DE TRATAMIENTO DE EFLUENTES CLOACALES DE SAN ANTONIO DE ARECO</h3></div>
            <div style={{textAlign:"center",marginBottom:"30px"}}><h3>Preguntas Frecuentes</h3></div>
            <Logo></Logo>
            {data.map((dato,i)=>{
                return(
                    <>
                    <Col key={dato.id} lg={12}>
                    <div 
                    onClick={()=>this.desplegar(dato.id)}
                     
                     >
                    <Row>
                       
                       <FontAwesomeIcon icon={faChevronCircleDown}  />
                       
                       <h5 style={{marginLeft:"5px", marginBottom:"20px"}}>{dato.pregunta}</h5>
                    </Row>
                        
                    </div>
                </Col>
                <Col lg={12} hidden={this.state.visible[dato.id]}>
                    <Card>
                        <Card.Body>
                        {dato.respuesta}
                        </Card.Body>
                    </Card>
                   
                </Col>
                </>
                )
            })}
           
        
            <div style={{textAlign:"center",marginBottom:"30px",marginTop:"30px"}}><h3>Para más consultas complete el siguiente formulario</h3></div>
        <Formulario/>
        </Container>
    )
}

}
export default Home;