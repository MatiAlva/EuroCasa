import React from 'react'
import ICONO_Sillon from '../img/ICONO_Sillon.png'
import './Section.css'
import {Nosotros} from '../constants/Nosotros'

const Section = () => {
  return (
    <div className='Container' id='Productos'>
        <div>
           <img src={ICONO_Sillon}/>
        </div>
        <div>
            <h1>Nosotros</h1>
              {Nosotros.map(({description}, i) => (
                <p>{description}</p>
            ))}
          </div>   
    </div>
  )
}

export default Section


