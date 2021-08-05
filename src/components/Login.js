import styled from "styled-components"

const Login = () => {
	return (
		
		<Container>
			<Background>	
			<Content>
				<Logos>
					<img src="/images/cta-logo-one.svg" alt="" />
				</Logos>
				<CTA>
					<h1>Get All There</h1>
				</CTA>
				<Info>
					<p>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As if 3.26.21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
				</Info>
				<SmallLogos>
					<img src="/images/cta-logo-two.png" alt="" />
				</SmallLogos>
			</Content>
			</Background>
		</Container>
		

	)
}

export default Login

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	


`


const Background = styled.div`
	overflow: hidden;
	z-index: -1;
	background-image: url("/images/login-background.jpg");
	height: calc(100vh - 70px);
	width: 100%;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1;
	height: 100%;
`

const Logos = styled.div`
	margin: 1rem;	
		img{
			width: 700px;
			height: 300px;
			}
	
`

const CTA = styled.button`
	background-color: blue;
	border-radius: 10px;
	padding: 10px;
	width: 90%;
	height: 4.7rem;
	color: rgb(249, 249, 249);
	text-transform: uppercase;
	`

const Info = styled.div`
	color: rgb(249, 249, 249);
	margin: 2rem 3rem;
	width: 90%;
`

const SmallLogos = styled.div`
	margin: 3rem;
	padding: 0 1rem;	
		img {
			width: 100%;
			height: 100%;
		}
`

