import { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    })
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
  }


  return (
    <>
      <div className='h-screen w-full p-7 pt-4 flex flex-col justify-between'>
        <div>
          <img className='w-20 mb-10' src="https://pngimg.com/d/uber_PNG24.png" alt="logo" />
          <form onSubmit={submitHandler}>
            <label className='text-base font-medium flex mb-2'>What's your name</label>
            <div className='flex gap-4'>
              <input
                type="text"
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value)
                }}
                placeholder='Firstname'
                className='bg-[#eeee] mb-7 px-4 py-2 w-1/2 text-base placeholder:text-sm'
                required
              />
              <input
                type="text"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value)
                }}
                placeholder='Lastname'
                className='bg-[#eeee] mb-7 px-4 py-2 w-1/2 text-base placeholder:text-sm'
              />
            </div>
            <label className='text-base font-medium flex mb-2'>Email</label>
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
            <button className='w-full bg-black rounded border-none px-4 py-2 mb-2 text-white font-semibold'>Signup as Captain</button>
            <p className='text-sm text-center'>Already have an account?<Link to='/captain-login' className='text-blue-800 font-semibold cursor-pointer'> Login</Link></p>
          </form>
        </div>
        <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated means, from uber and its affiliates to the number provided. </p>
        {/* <Link to='/captain-signup' className='flex align-center justify-center w-full bg-[#ca9a1f] rounded border-none px-4 py-2 text-white font-semibold'>Signup as Captain</Link> */}
      </div>
    </>
  )
}

export default CaptainSignup
