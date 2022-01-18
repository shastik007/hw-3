import React from 'react'
import Inputs from './components/inputs/Input'
import Input2 from './components/Input2'
import Input3 from './components/inputs/Input3'
import Input4 from './components/inputs/Input4'

function App() {
	const [state, setState] = React.useState([])

	const Push = (info) => {
		setState([...state, info])
    console.log(state);
	}

	return (
		<div className='App'>
			<Inputs onPush={Push} />
			<Input2 onPush={Push} />
			<Input3 onPush={Push} />
			<Input4 onPush={Push} />
			<ul>
				{state.map((el, id) => {
					return (
						<li key={id}>
							<span>{el.name}</span>
							<span>{el.email}</span>
							<span>{el.password}</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default App
