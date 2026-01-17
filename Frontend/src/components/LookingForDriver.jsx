import React from 'react'

const LookingForDriver = (props) => {
    return (
        <>
            <i ref={props.lookingForDriverPanelCloseRef} onClick={() => props.setLookingForDriverOpen(false)} className="ri-arrow-down-wide-line opacity-0 absolute top-7 right-4 text-3xl"></i>
            <h3 className='text-2xl font-semibold mb-5'>Looking for nearby driver</h3>

            <div className='flex gap-2 flex-col justify-between items-center'>
                <img className='h-24' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yOWZiYjhiMC03NWIxLTRlMmEtODUzMy0zYTM2NGU3MDQyZmEucG5n" alt="uber car" />
                <div className='w-full mt-5'>
                    <div className="flex gap-4 items-start border-b pb-3">
                        <i className="ri-map-pin-2-fill text-lg mt-1"></i>
                        <div>
                            <h4 className="font-medium">Pickup</h4>
                            <p className="text-gray-600 text-sm">
                                Kishor Sagar Talab, Kota
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start border-b pb-3">
                        <i className="ri-map-pin-3-line text-lg mt-1"></i>
                        <div>
                            <h4 className="font-medium">Drop</h4>
                            <p className="text-gray-600 text-sm">
                                City Mall Road, Kota
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <i className="ri-currency-line text-lg mt-1"></i>
                        <div>
                            <h4 className="font-medium">₹193.20</h4>
                            <p className="text-gray-600 text-sm">Cash payment</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LookingForDriver
