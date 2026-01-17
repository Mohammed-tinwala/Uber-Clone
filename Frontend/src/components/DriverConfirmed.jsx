import React from "react";

const DriverConfirmed = (props) => {
    return (
        <>
         <i ref={props.driverConfirmedPanelCloseRef} onClick={() => props.setDriverConfirmedOpen(false)} className="ri-arrow-down-wide-line opacity-0 absolute top-5 right-4 text-3xl"></i>
            <h3 className='text-2xl font-semibold mb-5'>Driver</h3>

            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-4">
                    <img
                        className="w-14 h-14 rounded-full object-cover"
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="driver"
                    />

                    <div>
                        <h4 className="font-semibold text-lg">Ramesh Kumar</h4>
                        <p className="text-sm text-gray-600">⭐ 4.9 • 1,284 trips</p>
                    </div>
                </div>

                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <i className="ri-phone-line text-lg"></i>
                </button>
            </div>

            <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl mb-5">
                <div>
                    <h4 className="font-semibold text-lg">White Swift Dzire</h4>
                    <p className="text-gray-600 text-sm">RJ 20 AB 2345</p>
                </div>

                <div className="bg-black text-white px-4 py-1 rounded-lg font-semibold">
                    OTP: 4821
                </div>
            </div>

            <div className="flex flex-col gap-3">
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
        </>
    );
};

export default DriverConfirmed;
