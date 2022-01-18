import React from "react";

const Inputs = (props) =>{
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [name,setName] = React.useState('');

    const onEmail = (event) =>{
        setEmail(event.target.value)
    }

    const onPassword = (event) =>{
       setPassword(event.target.value)
    }

    const onName = (event) =>{
        setName(event.target.value)
    }

    const onAddHandler = (event) =>{
        event.preventDefault()
        const obj = {
            email:email,
            password:password,
            name:name,
        }
        props.onPush(obj)
    }


   return(
       <form onSubmit={onAddHandler}>
           <input value={email} type="email" onChange={onEmail} />
           <input value={password} type="password" onChange={onPassword} />
           <input value={name} type="text" onChange={onName} />
           <button type="submit">add</button>
       </form>
   )
}

export default Inputs 