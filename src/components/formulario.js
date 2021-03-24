import React,{useEffect,useState} from 'react';
import { Formik } from 'formik';
import ProfileSchema from './validacion';
import Servicio from "../service/consultas"
import { Modal, Button } from 'react-bootstrap';

const Formulario = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
         <div>
   
        <Formik
          initialValues={{ fullname: '', email: '', texto: '' }}
          validationSchema={ProfileSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async() => {
              const res = await Servicio.enviar(values);
              if(res)handleShow()
              
              console.log(res);
              console.log(values.email);
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullnamme">Nombre o Entidad</label>
                <input
                  type="fullname"
                  name="fullname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullname}
                  style={{width:"100%"}}
                />
                <p style={{color:"red"}}>{errors.fullname && touched.fullname && errors.fullname}</p>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  style={{width:"100%"}}
                />
                <p style={{color:"red"}}>{errors.email && touched.email && errors.email}</p>
              </div>
              <div className="form-group">
                <label htmlFor="texto">Consulta</label>
                <textarea
                  type="text"
                  name="texto"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.texto}
                  style={{width:"100%"}}
                />
                <p style={{color:"red"}}>{errors.texto && touched.texto && errors.texto}</p>
              </div>
              <button 
              type="submit"
               disabled={isSubmitting}
               style={{width:"100%", background: "rgba(153, 198, 187, 0.89)"}}
               >
                {isSubmitting ? 'Enviando' : 'Enviar'}
              </button>
            </form>
          )}
        </Formik>
        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Consulta</Modal.Title>
            </Modal.Header>
            <Modal.Body>Su consulta se envio con exito</Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleClose}>
                Cerrar
              </Button>
              
            </Modal.Footer>
          </Modal>
      </div>
      )
 
    };

export default Formulario;