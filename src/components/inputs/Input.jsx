import React from 'react'
import './input.css'

const Inputs = (props) => {
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')

	const onEmail = (event) => {
		setEmail(event.target.value)
		event.target.value = ''
	}

	const onPassword = (event) => {
		setPassword(event.target.value)
	}

	const onAddHandler = (event) => {
		event.preventDefault()
		const obj = {
			email: email,
			password: password,
		}
		console.log(obj)
		props.onPush(obj)
	}

	return (
		<div class='login-box'>
			<h2>Login</h2>
			<form onSubmit={onAddHandler}>
				<div class='user-box'>
					<input value={email} type='email' onChange={onEmail} />
					<label>Username</label>
				</div>
				<div class='user-box'>
					<input
						value={password}
						type='password'
						onChange={onPassword}
					/>
					<label>Password</label>
				</div>
				<a href='#' type='submit'>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<button  type='submit'>submit</button>
				</a>
			</form>
		</div>
	)
}

export default Inputs
