import styled from "styled-components"
import { useParams } from "react-router-dom"
import {useEffect , useState} from "react";
import db from '../firebase'

const Details = () => {
const { id } = useParams();
const [movie, setMovie] = useState();
useEffect(() => {
	db.collection("movies").doc(id).get().then((doc) => {
		if (doc.exists){
			setMovie(doc.data())
		} 
	})

}, [id]);



	return (
		<Container>
			{movie &&
			<>
			<Background>
				<img src={movie.backgroundImg} alt="" />
			</Background>
			<ImageTitle>
				<img src={movie.titleImg} alt="" />
			</ImageTitle>
			<Controls>
				<PlayButton>
					<img src="/images/play-icon-black.png" alt="" />
					<span>Play</span>
				</PlayButton>
				<Trailer>
					<img src="/images/play-icon-white.png" alt="" />
					<span>Trailer</span>
				</Trailer>
				<AddButton>
					<span>+</span>
				</AddButton>
				<GroupWatch>
			<img src="/images/group-icon.png" alt="" />
				</GroupWatch>
			</Controls>
			<Subtitle>
				<h4>{movie.subTitle}</h4>
			</Subtitle>
			<Description>
				<p>
					{movie.description}
				</p>
			</Description>
			</>
			}
		</Container>
	)
}

export default Details


const Container = styled.div `
	min-height: calc(100vh - 100px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
`

const Background = styled.div `
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
	opacity: 0.8;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

const ImageTitle = styled.div `
	margin-top: 50px;	
	height: 30vh;
	min-height: 175px;
	min-width: 200px;
	width: 35vw;

	img {
		width: 100%;
		height: 100%;
	}
`

const Controls = styled.div `
	margin-top: 3rem;	
display: flex;
	align-items: center;
`
const PlayButton = styled.button `
	border-radius: 4px;
	padding: 0 24px;
	margin-right: 22px;
	font-size: 1rem;
	display: flex;
	align-items: center;
	height: 56px;
	background: rgb(249, 249, 249);
	border: none;
	letter-spacing: 1.8px;
	cursor: pointer;
	text-transform: uppercase;

	&:hover {
		background: rgb(198, 198, 198);
	}
`

const Trailer = styled(PlayButton) `
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);

`

const AddButton = styled.button `
	width: 44px;
	height: 44px;
	margin-right: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid white;
	background: rgba(0, 0, 0, 0.6);
	cursor: pointer;

	span {
		font-size: 30px;
		color: white;
	}
	`

const GroupWatch = styled(AddButton) `
	background: rgb(0, 0, 0);
`


const Subtitle = styled.div `
	padding: 1.5rem 0;
	color: rgb(249, 249, 249);
	font-size: 1rem;
	min-height: 1rem;
	margin-top: 1.5rem;
`


const Description = styled.div `
	line-height: 1.5;
	font-size: 1.3rem;
	margin-top 1rem;
	color: rgb(249, 249, 249);
`





