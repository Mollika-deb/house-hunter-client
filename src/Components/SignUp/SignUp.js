import React, { useState } from 'react';

const SignUp = () => {

    const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

    async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})
	
	}

    return (
        <div>
          <div>
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input
                className='border border-gray-600'
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
				<br />
				<input
                  className='border border-gray-600'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
                  className='border border-gray-600'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input className='btn btn-secondary' type="submit" value="Register" />
			</form>
		</div>

        </div>
    );
};

export default SignUp;