import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {

  const navigate = useNavigate();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { captain, setCaptain } = useContext(CaptainDataContext);


  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if (response.status === 201) {
      const { token, captain } = response.data;
      setCaptain(captain);
      localStorage.setItem('token', token);

      navigate('/captain-home');
    }

    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  }


  return (
    <>
      <div className='h-screen w-full p-7 pt-4 flex flex-col justify-between'>
        <div>
          <img className='w-20 mb-6' src="https://pngimg.com/d/uber_PNG24.png" alt="logo" />
          <form onSubmit={submitHandler}>
            <label className='text-base font-medium flex mb-2'>Fullname</label>
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

            <label className='text-base font-medium flex mb-2'>Vehicle Information</label>
            <div className='flex gap-4 mb-7'>
              <input
                type="text"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                placeholder='Vehicle Color'
                className='bg-[#eeee] px-4 py-2 w-1/2 text-base placeholder:text-sm'
                required
              />
              <input
                type="text"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                placeholder='Vehicle Plate'
                className='bg-[#eeee] px-4 py-2 w-1/2 text-base placeholder:text-sm'
                required
              />
            </div>
            <div className='flex gap-4 mb-7'>
              <input
                type="number"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                placeholder='Vehicle Capacity'
                className='bg-[#eeee] px-4 py-2 w-1/2 text-base placeholder:text-sm'
                required
              />

              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className='bg-[#eeee] px-4 py-2 w-1/2 text-base'
                required
              >
                <option className='text-sm' value="">Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            <button className='w-full bg-black rounded border-none px-4 py-2 mb-2 text-white font-semibold'>Signup as Captain</button>
            <p className='text-sm text-center'>Already have an account?<Link to='/captain-login' className='text-blue-800 font-semibold cursor-pointer'> Login</Link></p>
          </form>
        </div>
        <p className='text-[10px] mt-4 leading-tight'>By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated means, from uber and its affiliates to the number provided. </p>
        {/* <Link to='/captain-signup' className='flex align-center justify-center w-full bg-[#ca9a1f] rounded border-none px-4 py-2 text-white font-semibold'>Signup as Captain</Link> */}
      </div>
    </>
  )
}

export default CaptainSignup
