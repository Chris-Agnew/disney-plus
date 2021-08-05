import styled from 'styled-components'

const Header = () => {
	return (
	<div>
	<Nav>
			<Logo src="/images/logo.svg"/>

		<NavMenu>
		<a href="/">
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
	overflow-x: hidden;
`	

const Logo = styled.img`
	width: 100px;
`

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 15px;
	cursor: pointer;
	align-items: center;

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #fff;
		padding: 0.5rem;

		img {
			height: 25px;
			padding-right: 0.5rem;
		}

		span {
			font-size: 15px;
			letter-spacing: 1.42px;
			position: relative;
			padding-top: 5px;
			&:after {
				content: '';
				height: 2px;
				background-color: #fff;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				opacity: 0;
				transform: scaleX(0);
				transform-origin: left center;
				transition: all 750ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
			}
			&:hover {
				&:after {
					opacity: 1;
					transform: scaleX(1);
			}	
		}
		}	
	}
	`
	const UserImg = styled.img`
		width: 48px;
		height: 48px;
		border-radius: 50%;
		cursor: pointer;
	`