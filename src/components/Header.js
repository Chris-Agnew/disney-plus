import {useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { selectUserName, selectUserPhoto,setUserLogin, setSignOut} from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => {
	const dispatch = useDispatch();
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);
	const history = useHistory();

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				dispatch(setUserLogin({
			name: user.displayName,
			email: user.email,
			photo: user.photoURL,
		}))
		history.push('/')
	}
		})
	}, [userName, userPhoto, dispatch, history])



  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user)
		})}
        else if (userName) {
      		auth
        .signOut()
        .then(() => {
          dispatch(setSignOut());
           history.push("/login");
        })
     
  }
}
		
  const setUser = (user) => {
    dispatch(
      setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };


	return (
	<Nav>
		<Link to="/">
			<Logo src="/images/logo.svg"/>

		</Link>
		
		{!userName ?(
		<LoginContainer>
		<Login onClick={handleAuth}>Login</Login>
		</LoginContainer>
			
		): 
			<>
		<NavMenu>
		<a href="/">
			<img src="/images/home-icon.svg" alt="" />
			<span>HOME</span>
		</a>
		<a href="#Search">
			<img src="/images/search-icon.svg" alt="" />
			<span>SEARCH</span>
		</a>
		<a href="#Watchlist">
			<img src="/images/watchlist-icon.svg" alt="" />
			<span>WATCH LIST</span>
		</a>
		<a href="#Originals">
			<img src="/images/original-icon.svg" alt="" />
			<span>ORIGINALS</span>
		</a>
		<a href="#Movies">
			<img src="/images/movie-icon.svg" alt="" />
			<span>MOVIES</span>
		</a>
		<a href="#Series">
			<img src="/images/series-icon.svg" alt="" />
			<span>SERIES</span>
		</a>
		</NavMenu>
		
		<UserImg onClick={handleAuth} src={`${userPhoto}`}/>
		</>
		}
		</Nav>	
		

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

	const Login = styled.div`
		border: 1px solid #f9f9f9;
		padding: 0.5rem 1rem; 
		border-radius: 5px;
		letter-spacing: 1.42px;
		text-transform: uppercase;
		background-color: rgba(0, 0, 0, 0.6);
		cursor: pointer;
		transition: all 450ms ease-out;

		&:hover {
			background-color: #f9f9f9;
			color: #333;
			border-color: transparent;
		
		}
	`

	const LoginContainer = styled.div`
		flex: 1;
		display: flex;
		justify-content: flex-end;
	`