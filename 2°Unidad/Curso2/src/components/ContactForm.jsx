import { useState } from "react";
const EMAIL_RE = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/i;

function ContactForm()
{
    const [values,setValues] = useState({nombre: '',email:'',mensaje:''});
    const [touched,setTouched] = useState({nombre:false,email:false,mensaje:false});
    const [submitted, setSubmitted] = useState(false);

    const errors = {
        nombre : values.nombre.trim() === ''?'El nombre es obligatorio':'',
        email : values.email.trim() === ''?'El mail es obligatorio' : EMAIL_RE.test(values.email)?'':'El mail no tiene formato válido',
        mensaje:values.mensaje.trim() === ''?'El mensaje es obligatorio':'',
    };

    const isValid = (field) => !errors[field];

    const fieldClass = (field) => {
        const show = touched[field] || submitted;
        if(!show) return 'form-control';
        return isValid(field)?'form-control is-valid' : 'form-control is-invalid'
    };

    const handlerChange = (e) => {
        const {name , value} = e.target;
        setTouched((t) => ({...t, [name]:true}));
    }

    const handleBlur= (e) => {
        const {name , value} = e.target;
        setTouched((t) => ({...t, [name]:true}));
    }

    const handleSubmit= (e) =>{
        e.preventDefault();
        setSubmitted(true);
        if(isValid('nombre') && isValid('email') && isValid('mensaje')){
            alert('Mensaje enviado correctamente.');
            setValues({nombre:'',email:'',mensaje:''});
            setTouched({nombre:false,email:false,mensaje:false});
            setSubmitted(false);
        }
    };

    return(
        <section id="contact" className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="mb-3">
                            Contacto
                        </h2>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre: </label>
                                <input 
                                id="nombre"
                                name="nombre"
                                type="text" 
                                className={fieldClass('nombre')}
                                placeholder="Ingrese nombre"
                                value={values.nombre}
                                onChange={handlerChange}
                                onBlur={handleBlur}
                                />
                                {(touched.nombre || submitted) && errors.nombre && (
                                    <div className="invalid-feedback">{errors.nombre}
                                    </div>
                                )}
                                {(touched.nombre || submitted) && !errors.nombre && (
                                    <div className="valid-feedback">{errors.nombre}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email: </label>
                                <input 
                                id="email"
                                name="email"
                                type="text" 
                                className={fieldClass('email')}
                                placeholder="Ingrese email"
                                value={values.email}
                                onChange={handlerChange}
                                onBlur={handleBlur}
                                />
                                {(touched.email || submitted) && errors.email && (
                                    <div className="invalid-feedback">{errors.email}
                                    </div>
                                )}
                                {(touched.email || submitted) && !errors.email && (
                                    <div className="valid-feedback">{errors.email}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mensaje" className="form-label">mensaje: </label>
                                <input 
                                id="mensaje"
                                name="mensaje"
                                rows="4" 
                                className={fieldClass('mensaje')}
                                placeholder="Ingrese mensaje"
                                value={values.mensaje}
                                onChange={handlerChange}
                                onBlur={handleBlur}
                                />
                                {(touched.mensaje || submitted) && errors.mensaje && (
                                    <div className="invalid-feedback">{errors.mensaje}
                                    </div>
                                )}
                                {(touched.mensaje || submitted) && !errors.mensaje && (
                                    <div className="valid-feedback">{errors.mensaje}
                                    </div>
                                )}
                            </div>
                            <div className="d-grid d-sm-flex gap-3">
                                <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

}
export default ContactForm;