import {ContactHorarios} from '../constants/ContactHorarios'
import {ContactoTelefonos} from '../constants/ContactoTelefonos'
import {FcPhone} from 'react-icons/fc'
import {FaWhatsapp} from 'react-icons/fa'
import {TiLocation} from 'react-icons/ti'
import {Content, ContactWrapper, ContactForm, ContactInfo, ContactHorario, PieDePagina} from './FooterStyled'
import Form from './Form'
import {saveData} from '../service'



function Footer() {

    const handleSubmit = (data) => {
        saveData(data)
    }

  return (
    <div id='Contacto'>
        <Content>
            <ContactWrapper animated bounceInUp>
                <ContactForm>
                    <Form handleSubmit={handleSubmit}/>
                </ContactForm>
                {ContactoTelefonos.map(({titulo, linea, whatsApp, ubicacion}, i) => (
                    <ContactInfo key={i}>          
                        <h4>{titulo}</h4>
                        <ul>
                            <li>
                                <FcPhone/>
                                {linea}
                            </li>
                            <li>
                                <FaWhatsapp />
                                 {whatsApp}
                            </li>
                            <li>
                                <TiLocation />
                                {ubicacion}
                            </li>
                        </ul>
                    </ContactInfo>
                ))}
                {ContactHorarios.map(({horario,dias, titulo}, i) => (
                    <ContactHorario key={i}>
                        <h4>{titulo}</h4>
                        <ul>
                           <li>{dias}</li>
                           <li>{horario}</li> 
                        </ul>
                        
                    </ContactHorario>
                ))}
            </ContactWrapper>
        </Content>
        <PieDePagina>
            <p> Todos los derechos reservados </p>
        </PieDePagina>
    </div>
  )
}

export default Footer