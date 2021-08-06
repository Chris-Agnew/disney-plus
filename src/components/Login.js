import styled from "styled-components"

const Login = () => {
	return (
		
		<Container>
			<Background>	
			<Content>
				<Logos>
					<img src="/images/cta-logo-one.svg" alt="" />
				</Logos>
				<SignUp>
					Get All There
				</SignUp>
				<Info>
					<p>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 3.26.21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
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
	background-image: url("/images/login-background.jpg");
	height: calc(100vh - 70px);
	width: 100%;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`

const Logos = styled.div`
	margin: 1rem;	
		img{
			width: 700px;
			height: 300px;
			}
	
`

const SignUp = styled.a`
    width: 45%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
	z-index: 3;
	text-transform: uppercase;
    &:hover {
        background: #0483ee;
    }
`

const Info = styled.div`
	color: rgb(249, 249, 249);
	margin: 2rem 3rem;
	width: 50%;
`

const SmallLogos = styled.div`
	margin: 3rem;
	padding: 0 1rem;	
		img {
			width: 700px;
			height: 100%;
		}
`

