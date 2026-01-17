import { Link } from "react-router-dom";

const Start = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 w-full flex flex-col justify-between">
        <img className='w-18 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-2xl font-bold'>Get Started With Uber</h2>
          <Link to='/login' className='flex align-center justify-center w-full bg-black text-white py-3 mt-8 rounded'>Continue</Link>
        </div>

      </div>
    </>
  )
}

export default Start
