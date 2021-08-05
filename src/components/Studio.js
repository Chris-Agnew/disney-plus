import styled from 'styled-components'

const Studio = () => {

	return (
		
		<Container>
			<Wrap>
				<img src="/images/viewers-disney.png" alt="" />
			</Wrap>
			<Wrap>
				<img src="/images/viewers-marvel.png" alt="" />
			</Wrap>
			<Wrap>
				<img src="/images/viewers-pixar.png" alt="" />
			</Wrap>
			<Wrap>
				<img src="/images/viewers-starwars.png" alt="" />
			</Wrap>
			<Wrap>
				<img src="/images/viewers-national.png" alt="" />
			</Wrap>
			
		</Container>
	
	)
}


export default Studio



const Container = styled.div`
	padding: 26px 0;
	display: grid;
	grid-gap: 30px;
	grid-template-columns: repeat(5, minmax(0, 1fr));


`

const Wrap = styled.div`
margin-top: 50px;
border: 3px solid rgba(249, 249, 249, 0.1);
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

	img {
		width: 100%;
		height: 100%;

	}
	&:hover {
		transform: scale(1.1);
		border-color: rgba(249, 249, 249 0.8);
	}
`