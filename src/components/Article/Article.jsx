import React from 'react'
import BANNER_Sillon from '../img/BANNER_Sillon.png'
import {Img, Text, Container, ContainerCards ,Butto} from './ArticleStyled'
import {Productos} from '../constants/Productos'

const Article = () => {
  return (
      <>
        <Container id='Productos'>
            <Img src={BANNER_Sillon} alt='Banner de Sillon' />
            <Text>NOVEDOSOS Y BRILLANTES </Text>
        </Container>
        <ContainerCards >   
            {Productos.map(({imagen, tittle, description}, i) => (
              <div key={i}>
                   <div >
                     <img src={imagen} alt={description} />
                       <h2>{tittle}</h2>
                       <p>{description}</p>
                    </div>   
                </div>
            ))}  
            </ContainerCards>
              <Butto>
                <button>
                  Ver mas
                </button>
              </Butto>
     </>

    ) 
}

export default Article