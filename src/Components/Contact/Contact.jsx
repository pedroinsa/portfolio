import React, { useRef }from 'react'
import Navbar from '../Navbar/Navbar'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import './Contact.css'


export default function Contact() {
const [input, setInput] = React.useState({from_name: "", email_id:"", message: ""})
const [error, setError] = React.useState({})
const form = useRef() 
const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current.message)
    emailjs.sendForm("service_mbcz84h", "template_q78zbit", form.current, "LXzfmdMKNU6SPWeox")
      .then((result) => {
          console.log(result.text);

      }, (error) => {
          console.log(error.text);
      })
      .then(()=>{
        Swal.fire({
          icon: "success",
          title: "Tu mail ha sido enviado!",
        });
      })
  };
  function validate(input){
    const error = {}
    if(!input.from_name.length){
      error.from_name = "Debe ingresar un nombre"
    }
    else if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(input.email_id)){
     error.email_id = "Debe ingresar un email valido"
    }
    else if(!input.message.length){
      error.message = "Debe ingresar un mensaje"
    }
    return error
  }
  function handlerChange(e){
    setInput({...input, [e.target.name]: e.target.value})
    setError(validate({...input, [e.target.name]: e.target.value}))  
  }
  return (
    <div>
        <Navbar/>
        
        <form className='form-contact' ref={form} onSubmit={sendEmail}> 
        <h2>Puedes enviarme un email!</h2>
          <div className='input-div'>
            <label>Nombre:</label>
            <input onChange={handlerChange} type="text" name="from_name"/>
          </div> 
          <div className='input-div'>
            <label>Tu mail :</label>
            <input type="text" onChange={handlerChange} name='email_id'/>
          </div>  
          <div className='input-div'> 
            <label>Mensaje:</label>
            <input type='text' onChange={handlerChange} name='message'/>
          </div>  
          <div className='submit-button'>
          { !!input.from_name.length &&!error.from_name && !error.email_id && !error.message && <button>Enviar</button>}
            {error.from_name && <h3>{error.from_name}</h3>}
            {error.email_id && <h3>{error.email_id}</h3>}
            {error.message && <h3>{error.message}</h3>}
          </div> 
        </form>

    </div>
  )
}
