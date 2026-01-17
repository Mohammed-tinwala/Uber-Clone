import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainLogin = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainLoginData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainLoginData);

    if (response.status === 200) {
      const { token, captain } = response.data;
      setCaptain(captain);
      localStorage.setItem('token', token);

      navigate('/captain-home');
    }

    setEmail('');
    setPassword('')
  }


  return (
    <>
      <div className='h-screen w-full p-7 pt-4 flex flex-col justify-between'>
        <div>
          <img className='w-20 mb-10' src="https://pngimg.com/d/uber_PNG24.png" alt="logo" />
          <form onSubmit={submitHandler}>
            <label className='text-base font-medium flex mb-2'>What's you email</label>
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
              className='bg-[#eeee] mb-7 px-4 py-2 w-full text-base  placeholder:text-sm'
              required
            />
            <button className='w-full bg-black rounded border-none px-4 py-2 mb-2 text-white font-semibold'>Login as Captain</button>
            <p className='text-sm text-center'>Don't have an account?<Link to='/captain-signup' className='text-blue-800 font-semibold cursor-pointer'> Signup</Link></p>
          </form>
        </div>
        <Link to='/login' className='flex align-center justify-center w-full bg-[#ca9a1f] rounded border-none px-4 py-2 text-white font-semibold'>Login as User</Link>
      </div>
    </>
  )
}

export default CaptainLogin
