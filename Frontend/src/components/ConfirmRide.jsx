import React from 'react'

const ConfirmRide = (props) => {
    return (
        <>
            <i ref={props.confirmRidePanelCloseRef} onClick={() => props.setConfirmRideOpen(false)} className="ri-arrow-down-wide-line opacity-1 absolute top-6 right-4 text-3xl"></i>
            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex gap-2 flex-col justify-between items-center'>
                <img className='h-24' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yOWZiYjhiMC03NWIxLTRlMmEtODUzMy0zYTM2NGU3MDQyZmEucG5n" alt="uber car" />
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className="ri-map-pin-3-line text-lg"></i>
                        <div>
                            <h3 className='font-semibold text-xl'>567/11-A</h3>
                            <p className='text-gray-600 text-sm mt-1'>Kishor Sagar Talab</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className="ri-map-pin-3-fill text-lg"></i>
                        <div>
                            <h3 className='font-semibold text-xl'>567/11-A</h3>
                            <p className='text-gray-600 text-sm mt-1'>Kishor Sagar Talab</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className="ri-currency-fill text-lg"></i>
                        <div>
                            <h3 className='font-semibold text-xl'>₹193.20</h3>
                            <p className='text-gray-600 text-sm mt-1'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-5'>
                    <button
                        onClick={() => {
                            props.setLookingForDriverOpen(true)
                            props.setConfirmRideOpen(false)
                        }}
                    className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg'
                    >Confirm
                </button>
            </div>
        </div >

        </>
    )
}

export default ConfirmRide
