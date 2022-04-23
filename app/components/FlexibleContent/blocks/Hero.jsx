// import { Container } from 'reactstrap'

const Hero = (props) => {
	const { 
		title, 
		desktopImage 
	} = props.data

	return(
		<div className="container">
			{desktopImage && 
				<img 
					src={desktopImage.mediaItemUrl} 
					alt={desktopImage.altText}
					width={desktopImage.mediaDetails.width}
					height={desktopImage.mediaDetails.height}
				/>
			}
		</div>
	)
}

export default Hero