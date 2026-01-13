import { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })
    console.log(userData);
    setEmail('');
    setPassword('')
  }




  return (
    <>
      <div className='h-screen w-full p-7 flex flex-col justify-between'>
        <div>
          <img className='w-18 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
          <form onSubmit={submitHandler}>
            <label className='text-base font-medium flex mb-2'>What's youe email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              placeholder='Enter your email'
              className='bg-[#eeee] mb-7 px-4 py-2 w-full text-base placeholder:text-sm'
              required
            />
            <label className='text-base font-medium flex mb-2'>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              placeholder='Enter your password'
              className='bg-[#eeee] mb-7 px-4 py-2 w-full text-base placeholder:text-sm'
              required
            />
            <button className='w-full bg-black rounded border-none px-4 py-2 mb-2 text-white font-semibold'>Login</button>
            <p className='text-sm text-center'>Don't have an account?<Link to='/signup' className='text-blue-800 font-semibold cursor-pointer'> Signup</Link></p>
          </form>
        </div>
        <Link to='/captain-login' className='flex align-center justify-center w-full bg-[#ca9a1f] rounded border-none px-4 py-2 text-white font-semibold'>Login as Captain</Link>
      </div>
    </>
  )
}

export default UserLogin
