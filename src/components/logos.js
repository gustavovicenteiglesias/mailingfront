import React from 'react';
import { Button, Card, Col, Container,Jumbotron, Row } from 'react-bootstrap';
import muni from "../assest/images/web/Logo Muni 2021 letra blanca-01.png";
import argentina from "../assest/images/web/argentina-presidencia.png";
import enhosa from "../assest/images/web/Enohsa.png";
import sanear from "../assest/images/web/Sanear-01.png";
const Logo=()=>{
    return(
        <Row style={{justifyContent:"center",alignItems:"center"}}>
            <Col lg={3} md={6}  xs={12}  style={{marginTop:"10px",marginBottom:"10px" }}>
            <div className="centrado">
            <img
                alt=""
                src={argentina }
                width="210"
                height="70"
                
                />
            </div>
            
            </Col>
            <Col lg={3} md={6} xs={12}  style={{marginTop:"10px",marginBottom:"10px" }}>
            <div className="centrado">
            <img
                alt=""
                src={muni}
                width="80"
                height="80"
               
                />
            </div>
            </Col>
            <Col lg={3} md={6}  xs={12}  style={{marginTop:"10px",marginBottom:"10px" }}>
            <div className="centrado">
            <img
                alt=""
                src={enhosa}
                width="120"
                height="60"
                
                />
            </div>
             </Col>
             <Col lg={3} md={6}  xs={12}  style={{marginTop:"10px",marginBottom:"10px" }}>  
             <div className="centrado">
             <img
                alt=""
                src={sanear}
                width="140"
                height="100"

                />
              </div> 
             </Col>    
            </Row>
    )
};
export default Logo;