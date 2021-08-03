import styled from 'styled-components'

const Header = () => {
	return (
	<div>
	<Nav>
			<Logo src="/images/logo.svg"/>
			
		<NavMenu>
		<a href="#Home">
			<img src="/images/home-icon.svg" alt="" />
			<span>HOME</span>
		</a>
		<a href="#Search">
			<img src="/images/search-icon.svg" alt="" />
			<span>SEARCH</span>
		</a>
		<a href="#Home">
			<img src="/images/watchlist-icon.svg" alt="" />
			<span>WATCH LIST</span>
		</a>
		<a href="#Home">
			<img src="/images/original-icon.svg" alt="" />
			<span>ORIGINALS</span>
		</a>
		<a href="#Home">
			<img src="/images/movie-icon.svg" alt="" />
			<span>MOVIES</span>
		</a>
		<a href="#Home">
			<img src="/images/series-icon.svg" alt="" />
			<span>SERIES</span>
		</a>
		</NavMenu>
		<UserImg src="/images/profilepic.jpg"/>
		</Nav>
	</div>	
		

	)
}

export default Header

const Nav = styled.nav`
	height: 70px;
	background-color: #090b13;
	color: #fff;
	display: flex;
	align-items: center;
	padding: 0 2rem;
`	

const Logo = styled.img`
	width: 100px;
`

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 25px;
	cursor: pointer;
	align-items: center;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		text-decoration: none;
		color: #fff;

		img {
			height: 30px;
		}

		span {
			font-size: 15px;
			letter-spacing: 1.42px;
		}	
	}
	`
	const UserImg = styled.img`
		width: 48px;
		height: 48px;
		border-radius: 50%;
		cursor: pointer;
	`