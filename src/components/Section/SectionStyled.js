import styled from "styled-components";


export const SectionC = styled.div`
    width: 90%;
	max-width: 1000px;
	margin: 1.6em auto;

	display: grid;
	gap: 1.6em;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 80px;

	h1{
		font-family: ${props => props.theme.fonts};
        font-size: large;
		text-transform: uppercase;
	}

	img{
         height: 250px;
	}

    
@media screen and (max-width: 500px) {
		grid-template-columns: repeat(1, 1fr);
}
`


export const P = styled.p`
    margin-top: 40px;
	font-family: ${props => props.theme.fonts};
    font-size: large;
	
`