import styled from 'styled-components'

const Header = () => {
	return (
	<div>
	<Nav>
			<Logo src=""/>

			
		
		{/* <NavMenu>

		</NavMenu> */}
		</Nav>
	</div>	
		

	)
}

export default Header

const Nav = styled.nav`
	height: 70px;
	background-color: #090b13;
	color: #fff;
`

const Logo = styled.img`
	width: 50px;
`