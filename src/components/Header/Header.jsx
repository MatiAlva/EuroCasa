import React from 'react'
import Slider from '../img/SLIDER.png'
import {Conteiner, ImgSlider, Textos} from './HeaderSlydes'

const Header = () => {
  return (
    <Conteiner>
         <ImgSlider src={Slider} alt='Slider' />
         <Textos>
             <h1>MARCA TU</h1>
             <h2>ESTILO PROPIO</h2>
          </Textos>
    </Conteiner>
  )
}

export default Header