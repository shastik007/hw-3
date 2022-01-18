import React from 'react'

const Input2 = (props) => {
	const [state, setState] = React.useState({
        name:"",
        email:"",
        password:"",
    })

    const onChangeHandler = (event) => {
        if (event.target.name === 'email' ) {
            setState({...state,email:event.target.value,})
        }else if (event.target.name === 'password') {
            setState({...state,password:event.target.value})
        }else{
            setState({...state,name:event.target.value})
        }
    }

    const onAddHandler = (event) =>{
      event.preventDefault();
      console.log(state);
      props.onPush(state)
    } 


	return (
		<form onSubmit={onAddHandler}>
			<input name='email' type='email' onChange={onChangeHandler} />
			<input name='password' type='password' onChange={onChangeHandler} />
			<input name='name' type='text' onChange={onChangeHandler} />
			<button type='submit'>add</button>
		</form>
	)
}

export default Input2
