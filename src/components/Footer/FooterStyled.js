import styled from "styled-components";


export const Content = styled.div`
   max-width: 100%;
   margin-left: auto;
   margin-right: auto;
   padding: 1.5em;
   background-color: ${props => props.theme.pallet.primary}; 
   color: ${props => props.theme.pallet.third}; 
   margin-top: 50px;
`

export const ContactWrapper = styled.div`
  padding: 1em;

  @media screen and (min-width: 700px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      padding: 2em;
  }
`

export const ContactForm = styled.div`


form {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    ${props => props.theme.fonts};
    font-family: ${props => props.theme.fonts};
}

 form p{
   margin: 0;
   padding: 1em;
 }

  h3{
   ${props => props.theme.fonts};
    font-family: ${props => props.theme.fonts};
     text-align: center;
     text-transform: uppercase;
 }


 form button {
     width: 100%;
     padding: .7em;
     border: none;
     background: none;
     outline: 0;
     color: ${props => props.theme.pallet.third};
     background-color:${props => props.theme.pallet.secondary};
     border: 0;
     text-transform: uppercase;
     padding: 1em;
     cursor: pointer;

     &:hover{
       color: ${props => props.theme.pallet.primary};
       outline: 0;
     }

     &:focus {
         color: ${props => props.theme.pallet.primary};
        background-color: ${props => props.theme.pallet.third};
        transition: background-color 1s ease-out;
        outline: 0;
     }
     
 }


 form input{
    width: 100%;
     padding: .7em;
     border: none;
     background: none;
     outline: 0;
     color: ${props => props.theme.pallet.third};
     border-bottom: 1px solid ${props => props.theme.pallet.secondary};

 }
 form textarea{
     width: 100%;
     padding: .7em;
     border: none;
     background: none;
     outline: 0;
     color: ${props => props.theme.pallet.third};
     border-bottom: 1px solid ${props => props.theme.pallet.primary};

 }

 form select{
    width: 100%;
     padding: .7em;
     border: none;
     background: none;
     color: ${props => props.theme.pallet.third};
     outline: 0;
     border-bottom: 1px solid ${props => props.theme.pallet.secondary};
 }

 form option {
    outline: 0;
    color: ${props => props.theme.pallet.primary};
 }
   
`

export const ContactInfo = styled.div`
   
   h4{
      text-align: center;
      margin: 50px 0 1rem 0;
      text-transform: uppercase;
      font-family: ${props => props.theme.fonts};
      font-size: large;
   }
   ul{
      text-align: center;
      list-style: none;
      padding: .3em;
      svg{
       fill: ${props => props.theme.pallet.secondary} ;
       margin-right: 20px;
    }
   }

   li{
    padding: .5em;
    font-family: ${props => props.theme.fonts};

   }
    svg{
       color: ${props => props.theme.pallet.secondary} ;
       margin-right: 20px;
    }
   }
   p{
      text-align: center;
      margin: 0 0 1rem 0;
   }

   @media screen and (min-width: 700px) {
       h4{
         margin-top: -20px;
         padding: 1em;
         text-align: center;
        }
        ul{
           text-align: center;
           list-style: none;
           padding: .3em;
        }
        p{
            
         padding: 1em;
         text-align: center;
        }
  }

`

export const ContactHorario = styled.div`

h4{
      text-align: center;
      margin: 50px 0 1rem 0;
      text-transform: uppercase;
      font-family: ${props => props.theme.fonts};
      font-size: large;
   }
   ul{
      text-align: center;
      list-style: none;
      padding: .3em;
      svg{
       fill: ${props => props.theme.pallet.secondary} ;
       margin-right: 20px;
    }
   }

   li{
    padding: .5em;
    font-family: ${props => props.theme.fonts};

   }
    svg{
       color: ${props => props.theme.pallet.secondary} ;
       margin-right: 20px;
    }
   }
   @media screen and (min-width: 700px) {
       h4{
         margin-top: -20px;
         padding: 1em;
         text-align: center;
        }
        ul{
           text-align: center;
           list-style: none;
           padding: .3em;
        }
  }

`

export const PieDePagina = styled.div`

	background-color: ${props => props.theme.pallet.secondary};
	width: 100%;
	overflow: hidden;
	height: 80px;


 p {
    color: ${props => props.theme.pallet.third};
	text-align: center;
	margin-top: 40px;
   font-family: ${props => props.theme.fonts};
   font-size: large;
}
`

 