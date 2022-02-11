import styled from "styled-components";

export const Container = styled.div`
    width: 100%
    height: 400px;
    overflow: hidden;
    position: relative;
`;

export const Img = styled.img`
    margin-top: 50px;
    width: 100%;
    height: auto;
`

export const Text = styled.h2`
    font-size: 2.3rem;
    position:absolute;
    top: 60%;
    left: center;
    margin-left: 30%;
    justify-content: center;
    color: ${props => props.theme.pallet.third};


    @media screen and (max-width: 560px){
        font-size: 1.3rem;
        top: 50%;
    }

    @media screen and (max-width: 420px){
        font-size: 1.3rem;
        top: 50%;
        margin-left: 25%;
    }
`


export const ContainerCards = styled.div`
	max-width: 100%;
	margin: 1.6em auto;
	display: grid;
	gap: 5em;
    grid-template-columns: repeat(1fr, auto);
	margin-top: 80px;

    div p{
        text-align: center;
        font-family: ${props => props.theme.fonts};
        color: ${props => props.theme.pallet.DescrptionProducts};
    }
    div h2{
        font-family: ${props => props.theme.fonts};
        text-align: center;
    }

    div img{
        height: 280px;
        width: 280px;
        margin-left: 50px;
    }

@media screen and (min-width: 800px) {
      display: grid;
      gap: 4em;
      grid-template-columns: 1fr 1fr 1fr;
      padding: 2em;

      div img{
        margin-left: 20px;
        justify-content: center;
    }
    
  }

  @media screen and (max-width: 770px) {
    gap: 4em;
      grid-template-columns: 1fr 1fr;
  }



  /* @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    div img{
        height: 200px;
        width: 200px;
    }
  } */

  @media screen and (max-width: 550px) {
    gap: 5em;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 300px) {
    
    div img{
        height: 200px;
        width: 200px;
        margin-left: 20px;
    }
  }
`




export const Butto = styled.button`
       width: 100%;
       display: grid;
       place-items: center;
       background-color: transparent;
       border: 0;

       button{
           width: 140px;
           height: 50px;
           display: grid;
           place-items: center;
           border: 0;
           cursor: pointer;
           color: ${props => props.theme.pallet.third};
           ${props => props.theme.fonts};
           background-color: ${props => props.theme.pallet.secondary};
       
        
           &:hover{
       color: ${props => props.theme.pallet.primary};
       outline: 0;
     }

     &:focus {
         color: ${props => props.theme.pallet.primary};
        outline: 0;
     }
       
        }


  
`