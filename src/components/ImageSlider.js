import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";



const ImageSlider = () => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	}

	
	return (
		<Carousel{...settings}>
			<Wrap>
				<img src="/images/slider-badging.jpg" alt="" />
			</Wrap>
			<Wrap>
				<img src="/images/slider-badag.jpg" alt="" />
			</Wrap>
			<Wrap>
				<img src="/images/slider-scale.jpg" alt="" />
			</Wrap>
			<Wrap>
				<img src="/images/slider-scales.jpg" alt="" />
			</Wrap>
		</Carousel>
	)
}

export default ImageSlider

const Carousel = styled(Slider)`
	margin-top: 20px;
	
	.slick-list {
			overflow: visible;
		}
		button { 
			z-index: 1;
		}
	
	
	li.slick-active button:before {
		color: #fff;
		}
	
		ul li button {
		&:before {
			font-size: 0.8rem;
			color: rgb(150,158,171);

	}	

	
	


`

const Wrap = styled.div`
	margin-top: 20px;
	img {
		border: 4px solid transparent;
		border-radius: 4px;
		width: 100%;
		height: 100%;
		box-shadow: rgb(0 0 0 /69%) -0px 26px 30px -10px, rgb(0 0 0 / 69%) 0px 16px 10px -10px;
		transition-duration: 0.5s;
			
			&:hover {
				border: 4px solid rgb(249, 249, 249, 0.8);
	}
}

`