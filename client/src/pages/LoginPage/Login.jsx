import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        username, password
      });
      console.log(res.data);
      // handle successful login here
    } catch(err) {
      console.error(err);
      // handle errors here
    }
  };

  return (
    <>
        <div className="login">
            <div className='leftSide'>
                <img src="https://cdn.dribbble.com/userupload/4147386/file/original-22e8a68a8ca0917c47731a32e78a2dd0.jpg?compress=1&resize=1024x1024" alt="" />
            </div>
            <div className='rightSide'>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)}
                    />
                   
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    
                    
                    
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account? <span>Sign Up</span>
                    
                </p>
            </div>
        </div>
    </>
  )
}

export default Login
