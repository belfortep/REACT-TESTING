import React, { useState } from 'react'

export default function Login() {

    const [error, setError] = useState(false);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [user, setUser] = useState({})
    

  return (
    <div className='container'>
    <span>{user.username}</span>
        <form>
            <input placeholder='username' type='text' value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input placeholder='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button disabled={!username || !password} >Login</button>
            <span data-testid="error" style={{visibility: error ? "visible" : "hidden"}}>Something wrong</span>
        </form>
    </div>
  )
}
