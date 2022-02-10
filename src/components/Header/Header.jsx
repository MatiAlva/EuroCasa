import React from 'react'
import Slider from '../img/SLIDER.png'
import {Conteiner, ImgSlider, Text1, Text2} from './HeaderSlydes'

const Header = () => {
  return (
    <Conteiner>
         <ImgSlider src={Slider} alt='Slider' />
             <Text1>  MARCA TU </Text1>
             <Text2> PROPIO ESTILO</Text2>
    </Conteiner>
  )
}

export default Header