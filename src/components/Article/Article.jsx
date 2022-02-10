import React from 'react'
import BANNER_Sillon from '../img/BANNER_Sillon.png'
import {Img, Text, Container} from './ArticleStyled'
import {Products} from '../constants/Productos'

const Article = () => {
  return (
      <>
        <Container id='Productos'>
            <Img src={BANNER_Sillon} alt='Banner de Sillon' />
            <Text>NOVEDOSOS Y BRILLANTES </Text>
        </Container>
            {Products.map(({img, tittle, description}, i) => (
                <div className='Container'>      
                    <img src={img} alt={description} />
                    <h2>{tittle}</h2>
                    <p>{description}</p>
                </div>
            ))}  
     </>

    ) 
}

export default Article