import React from 'react'

const Input3 = (props) => {
	const [state, setState] = React.useState({
        name:'',
        password:'',
        email:'',
    })
	


    const onChangeInputHandler = (event) =>{
        const key = event.target.name
       setState({
           ...state,
           [key] : event.target.value
       })
    }

    const onSubmit = (event) =>{
       event.preventDefault()
       console.log(state);
       props.onPush(state)
    }

	return (
		<form onSubmit={onSubmit}>
			<input name='email' type='email' onChange={onChangeInputHandler} />
			<input name='password' type='password' onChange={onChangeInputHandler} />
			<input name='name' type='text' onChange={onChangeInputHandler} />
			<button type='submit'>add</button>
		</form>
	)
}

export default Input3
