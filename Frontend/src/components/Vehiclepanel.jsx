import React from 'react'

const Vehiclepanel = (props) => {
    return (
        <>
            <i ref={props.vehiclePanelCloseRef} onClick={() => props.setVehiclePanelOpen(false)} className="ri-arrow-down-wide-line opacity-0 absolute top-5 right-4 text-3xl"></i>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

            <div
                onClick={() => {
                    props.setConfirmRideOpen(true)
                    props.setVehiclePanelOpen(false)

                }} 
                className='flex justify-between items-center mb-2 w-full py-5 px-3 border-2 border-white active:border-2 active:border-black rounded-xl'>
                <img className='h-11' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yOWZiYjhiMC03NWIxLTRlMmEtODUzMy0zYTM2NGU3MDQyZmEucG5n" alt="uber car" />
                <div className='ml-2 w-1/2'>
                    <h2 className='font-medium text-xl'>UberGo <span className='ms-1 text-sm'><i className="text-normal ri-user-fill"></i>4</span></h2>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹193.20</h2>
            </div>

            <div
                onClick={() => {
                    props.setConfirmRideOpen(true)
                    props.setVehiclePanelOpen(false)

                }} 
                className='flex justify-between items-center mb-2 w-full py-5 px-3 border-2 border-white active:border-2 active:border-black rounded-xl'>
                <img className='h-11' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n" alt="uber bike" />
                <div className='w-1/2 -ml-2'>
                    <h2 className='font-medium text-xl'>Moto <span className='ms-1 text-sm'><i className="text-normal ri-user-fill"></i>1</span></h2>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, bike rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹65</h2>
            </div>

            <div
                onClick={() => {
                    props.setConfirmRideOpen(true)
                    props.setVehiclePanelOpen(false)

                }}
                className='flex justify-between items-center mb-2 w-full py-5 px-3 border-2 border-white active:border-2 active:border-black rounded-xl'>
                <img className='h-11' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n" alt="uber auto" />
                <div className='ml-2 w-1/2'>
                    <h2 className='font-medium text-xl'>UberAuto <span className='ms-1 text-sm'><i className="text-normal ri-user-fill"></i>3</span></h2>
                    <h5 className='font-medium text-sm'>7 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹118.86</h2>
            </div>
        </>
    )
}

export default Vehiclepanel
