import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';

const Register = () => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        username, email, password, role
      });
      console.log(res.data);
      // handle successful registration here
    } catch(err) {
      console.error(err);
      // handle errors here
    }
  };

  return (
    <>
        <div className="register">
            <div className='leftSide'>
                <img src="https://cdn.dribbble.com/userupload/4153976/file/original-10c32b9294d4b807f0c7148676b07787.jpg?compress=1&resize=1024x837" alt="" />
            </div>
            <div className='rightSide'>
                <form className='registerForm' onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    
                    <div>
                        <label>
                            <input 
                                type="radio" 
                                value="buyer" 
                                checked={role === "buyer"} 
                                onChange={e => setRole(e.target.value)} 
                            />
                            Buyer
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="dealer" 
                                checked={role === "dealer"} 
                                onChange={e => setRole(e.target.value)} 
                            />
                            Dealer
                        </label>
                    </div>
                    
                    <button type="submit">Register</button>
                </form>
                <p>
                    Already have an account? <span>Log In</span>
                </p>
            </div>
        </div>
    </>
  )
}

export default Register
