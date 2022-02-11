import React from 'react'
import ICONO_Sillon from '../img/ICONO_Sillon.png'
import {Nosotros} from '../constants/Nosotros'
import {SectionC, P} from './SectionStyled'

const Section = () => {
  return (
    <>
    <SectionC>
        <div>
           <img src={ICONO_Sillon} alt='Imagen de Sillon'/>
        </div>
        <div>
            <h1>Nosotros</h1>
              {Nosotros.map(({description}, i) => (
                <P key={i}>{description}</P>
            ))}
         </div>   
    </SectionC>
    </>
  )
}

export default Section


