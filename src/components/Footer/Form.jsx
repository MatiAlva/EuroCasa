import React, {useState} from 'react'

const Form = ({handleSubmit }) => {

    const [formValues, setFormValues] = useState({
        name: '',
        provincia: '',
        email:'',
        horario: '',
        telefono: '',
        consulta: '',
    })

    const handleChange = (e) => {
        const { name,value } = e.target
        setFormValues({...formValues, [name]: value})
    }


    const _handleSubmit = (e) => {
        e.preventDefault()
        handleSubmit({...formValues })
        // console.log(formValues)
    }



  return (
      <>
               <h3>Formulario</h3>
                    <form onSubmit={_handleSubmit}>
                        <p>
                            <label>Nombre</label>
                            <input 
                              type="text" 
                              name="name"  
                              placeholder='Nombre'
                              value={formValues.name}
                              onChange={handleChange} 
                            />
                        </p>
                        <p>
                            <label for='provincia'>Provincia</label>
                            <input 
                              type="text" 
                              name="provincia"  
                              placeholder='Provincia'
                              value={formValues.provincia}
                              onChange={handleChange} 
                            />
                        </p>
                        <p>
                            <label>E-mail</label>
                            <input 
                               type="email" 
                               name="email" 
                               placeholder='ejepmple@ejemple.com'
                               value={formValues.email}
                               onChange={handleChange} 
                            />
                        </p>
                        <p>
                            <label>Horario de Contacto</label>
                            <select 
                              name='horario' 
                              id='horarrio'
                              value={formValues.horario}
                              onChange={handleChange} 
                            >
                                <option value='Mañana'>10:00 A 12:00hs.</option>
                                <option value='Tarde'>13:00 A 19:00hs.</option>
                            </select>
                        </p>
                        <p>
                            <label>Telefono</label>
                            <input 
                              type="number" 
                              name="telefono" 
                              id='number' 
                              placeholder='1111111111'
                              value={formValues.telefono}
                              onChange={handleChange} 
                            />
                        </p>
                        <p>
                        <label>Consulta</label> 
                            <textarea 
                              name="consulta" 
                              id='message' 
                              rows="3" 
                              placeholder='Ingrese aqui su consulta'
                               value={formValues.consulta}
                              onChange={handleChange} 
                            />
                        </p>
                        <p className="block">
                            <button>
                                Enviar
                            </button>
                        </p>
                    </form>
                    </>
  )
}

export default Form