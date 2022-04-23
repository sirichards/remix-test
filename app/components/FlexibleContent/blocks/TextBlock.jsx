// import { Container } from 'reactstrap'

const TextBlock = (props) => {
	return(
		<div>
			<div dangerouslySetInnerHTML={{ __html: props.data.text }} />
		</div>
	)
}

export default TextBlock