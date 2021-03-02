export default props => (
	<div style={{
		border: '1px solid #ccc',
		marginBottom: '10px',
		padding: '20px',
        width: '500px'
		
	}}>
		<h2>Car name: {props.name} </h2>
		<p>Year: <strong>{props.year}</strong></p>
		<input type="text" onChange={props.onChangeName} value={props.name}/>
		<button onClick={props.onChangeTitle}>Click on change Title</button>
		<button onClick={props.onDelete}>Delete car</button>
	</div>
)