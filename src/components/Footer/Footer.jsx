import React from 'react'
import './FooterStyled.css'

function Footer() {
  return (
    <div id='Contacto'>
    <div className="content">
        <div className="contact-wrapper animated bounceInUp">
            <div className="contact-form">
                <h3>Formulario</h3>
                <form action="">
                    <p>
                        <label>FullName</label>
                        <input type="text" name="Nmae" placeholder='Nombre'/>
                    </p>
                    <p>
                        <label>Provincia</label>
                        <input type="email" name="email" />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email" placeholder='ejepmple@ejemple.com'/>
                    </p>
                    <p>
                        <label>Affair</label>
                        <input type="text" name="affair" />
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="email" name="email" placeholder='1111111111'/>
                    </p>
                    <p className="block">
                       <label>Consulta</label> 
                        <textarea name="message" rows="3" placeholder='Ingrese aqui su consulta'></textarea>
                    </p>
                    <p className="block">
                        <button>
                            Enviar
                        </button>
                    </p>
                </form>
            </div>
            <div className="contact-info">
                <h4>Contacto</h4>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> 0800-000-0000</li>
                    <li><i class="fas fa-phone"></i> (111) 111 111 111</li>
                    <li>Lorem ipsum 555</li>
                </ul>
            </div>
            <div className="contact-horario">
                <h4>Horarios</h4>
                <p>Lunes a Viernes</p>
                <p>10:00 - 19:00:hs.</p>
            </div>
        </div>

    </div>
    <div className='PieDePagina'>
        <p> Todos los derechos reservados </p>
    </div>
    </div>
  )
}

export default Footer