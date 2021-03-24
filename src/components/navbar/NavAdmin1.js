/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Navbar,Nav,Button,Row, Col}from "react-bootstrap";
import { Switch,Route} from "react-router-dom";
import Home from "../../Pages/Home";
import FAQ from "../../Pages/FAQ";
//import Estadistica from "../../Pages/Estadistica";
import Eias from "../../Pages/Eias";
import Habilitaciones from "../../Pages/Habilitaciones";
import Resumen from "../../Pages/Resumen";
import Informe from "../../Pages/Informe";
import logo1 from "../../assest/images/web/Elementos Web-01.png";
import logo from "../../assest/images/web/Elementos Web-01.png";
import face from "../../assest/images/web/Elementos Web-03.png";
import youtube from "../../assest/images/web/Elementos Web-04.png";
import radiopampa from "../../assest/images/web/Elementos Web-02.png";
import pause from "../../assest/images/header-imagenes/pause.png";
import instagram from "../../assest/images/web/Elementos Web-05.png";
import twitter from "../../assest/images/web/Elementos Web-06.png";
import PlayPause from  '../PlayPause';


import "./NavAdmin1.css";


var audio = new Audio('http://186.33.235.85:8088/;stream/1');
var logoradio=radiopampa;
class NavAdmin extends React.Component{
    constructor(props){
        super(props);
        this.playRadio=this.playRadio.bind(this);
        
        this.state = {
            radio:true,
            diaTemperatura:20.0,
            diaIcono:3,
            hidden: undefined,
            
          };
            
   }
  
   playRadio() {
    
    if(this.state.radio){
        audio.play();
        this.setState({radio:false})
        console.log('play')
        logoradio=pause;
       
    }else{
        audio.pause();
        this.setState({radio:true})
        console.log('stop')
        logoradio=radiopampa;
        
    }
    
   }

  
 
   
 render(){
    
        return(

            <>
            
              <Navbar  as="div" bg="light" expand="lg"  className="logo-header" >
            <Navbar.Brand href="/home" >
                <Row className="header-text"> 
                    <img
                                alt=""
                                src={logo}
                                width="80"
                                height="100"
                                className="menu-logo"
                            /> 
                    <h4 className="menu-titulo">San Antonio de Areco</h4>
                </Row>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav " className="buttton-nav">
           <Nav className="mr-auto  " >
            
            </Nav>
            <div >
                <Col>
                <a className="btn-icon active text-secondary ml-4" href="https://www.facebook.com/municipioareco" target="_blank" rel="noopener noreferrer">
                <img alt=""  src={face} width='50' height='50'/>
                </a>
                <a className="btn-icon active text-secondary ml-4" href="https://www.youtube.com/channel/UCPjIvZv1snYrk-Gky-265ZA" target="_blank" rel="noopener noreferrer" >
                <img alt=""  src={youtube} width='50' height='50'/>
                </a>
                </Col>
                <Col>
                <a className="btn-icon active text-secondary ml-4" href="https://www.instagram.com/municipioareco/" target="_blank" rel="noopener noreferrer" >
                <img alt=""  src={instagram} width='50' height='50'/>
                </a>
                <a className="btn-icon active text-secondary ml-4" href="https://twitter.com/municipioareco" target="_blank" rel="noopener noreferrer" >
                <img alt=""  src={twitter} width='50' height='50'/>
                </a>
                </Col>
                </div>
                <div className="header-radio">
                <a className="btn-icon active text-secondary ml-4 pt-3"  data-tip='' data-for='Radio Pampa'>
                <PlayPause url="http://186.33.235.85:8088/;stream/1" alto="60" ancho="60"/>
                <p className='envivo'>EN VIVO</p>
                </a>
               
             </div>
            </Navbar.Collapse>
            </Navbar>

            <Navbar className="bg-menu" expand="lg">
            <Navbar.Brand  className='brand-logo'  href="/home">
            
                <img
                            alt=""
                            src={logo1}
                            width="60"
                            height="80"
                            className="menu-logo-chico"
                        /> 
                <h5 className="">San Antonio de Areco</h5>
              
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav " className="buttton-nav">
                <Nav className="mr-auto ml-0 mt-0 " >
                <Button href="/home" variant="nav" >INICIO</Button>
                <Button href="/resumendeobra" variant="nav" >RESUMEN DE OBRA </Button>
                <Button href="/eias" variant="nav" >ESTUDIO DE IMPACTO AMBIENTAL Y SOCIA </Button>
                <Button href="/informe" variant="nav" >INFORME DE LA CONSULTA PUBLICA AÑO 2017 </Button>
                <Button href="/habilitaciones" variant="nav" >HABILITACIONES Y PERMISOS </Button>
                <Button href="/faq" variant="nav" >PREGUNTAS FRECUENTES </Button>
                </Nav>
               
            </Navbar.Collapse>
            </Navbar>
            <div className=" mt-3 ">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
            </Switch>
            <Switch>
              <Route exact path={["/resumendeobra"]} component={Resumen} />
            </Switch>
            <Switch>
              <Route exact path={["/eias"]} component={Eias} />
            </Switch>
            <Switch>
              <Route exact path={["/informe"]} component={Informe} />
            </Switch>
            <Switch>
              <Route exact path={["/habilitaciones"]} component={Habilitaciones} />
            </Switch>
            <Switch>
              <Route exact path={["/faq"]} component={FAQ} />
            </Switch>
            </div>
            </>
        )

    }

}
export default NavAdmin;