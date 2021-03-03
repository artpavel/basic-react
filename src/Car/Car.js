import './Car.css'

export default props => {
	
	const inputClasses = ['input']
	
	if(props.name !== ''){
		inputClasses.push('green')
	}else {
		inputClasses.push('red')
	}
	
	return (
		<div style={{
			border: '1px solid #ccc',
			margin: '10px auto',
			padding: 20,
			width: 500,
			boxShadow: '0 4px 5px 0 rgba(0,0,0,0.14)',
			borderRadius: '5px',
			backgroundColor: '#f7f5f5'
		}}>
			<h2>Car name: {props.name} </h2>
			<p>Year: <strong>{props.year}</strong></p>
			<input
				type="text"
				onChange={props.onChangeName}
				value={props.name}
				className={inputClasses.join(' ')}
			/>
			<button onClick={props.onChangeTitle}>Click on change Title</button>
			<button onClick={props.onDelete}>Delete car</button>
		</div>
	)
}