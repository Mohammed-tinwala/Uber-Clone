import React, { useState, useRef, use } from 'react'
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LocationSearchPanel from '../components/LocationSearchPanel';
import Vehiclepanel from '../components/Vehiclepanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import DriverConfirmed from '../components/DriverConfirmed';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRideOpen, setConfirmRideOpen] = useState(false);
  const [lookingForDriverOpen, setLookingForDriverOpen] = useState(false);
  const [driverConfirmedOpen, setDriverConfirmedOpen] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const vehiclePanelCloseRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const confirmRidePanelCloseRef = useRef(null);
  const lookingForDriverPanelRef = useRef(null);
  const lookingForDriverPanelCloseRef = useRef(null);
  const driverConfirmedPanelRef = useRef(null);
  const driverConfirmedPanelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        duration: 0.5,
        padding: 10,
        ease: 'power2.out'
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        duration: 0.5,
        padding: 0,
        ease: 'power2.out'
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0%)',
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(vehiclePanelCloseRef.current, {
        opacity: 1
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(vehiclePanelCloseRef.current, {
        opacity: 0
      });
    }
  }, [vehiclePanelOpen]);

  useGSAP(() => {
    if (confirmRideOpen) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0%)',
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(confirmRidePanelCloseRef.current, {
        opacity: 1
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(confirmRidePanelCloseRef.current, {
        opacity: 0
      });
    }
  }, [confirmRideOpen]);

  useGSAP(() => {
    if (lookingForDriverOpen) {
      gsap.to(lookingForDriverPanelRef.current, {
        transform: 'translateY(0%)',
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(lookingForDriverPanelCloseRef.current, {
        opacity: 1
      });
    } else {
      gsap.to(lookingForDriverPanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(lookingForDriverPanelCloseRef.current, {
        opacity: 0
      });
    }
  }, [lookingForDriverOpen]);

  useGSAP(() => {
    if (driverConfirmedOpen) {
      gsap.to(driverConfirmedPanelRef.current, {
        transform: 'translateY(0%)',
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(driverConfirmedPanelCloseRef.current, {
        opacity: 1
      });
    } else {
      gsap.to(driverConfirmedPanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(driverConfirmedPanelCloseRef.current, {
        opacity: 0
      });
    }
  }, [driverConfirmedOpen]);

  return (
    <>
      <div className='h-screen relative overflow-hidden'>
        <img className='absolute left-6 top-8 w-18 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />

        <div onClick={() => setPanelOpen(false)} className='h-screen w-screen'>
          <img className='h-screen w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map" />
        </div>

        <div className='h-screen flex flex-col justify-end absolute top-0 w-full'>
          <div className='h-[30%] p-5 bg-white relative'>
            <i ref={panelCloseRef} onClick={() => setPanelOpen(false)} className="ri-arrow-down-wide-line opacity-0 absolute top-4 right-4 text-3xl"></i>
            <h4 className='text-2xl font-semibold'>Find a trip</h4>
            <form onSubmit={(e) => {
              submitHandler(e);
            }}>
              <div className='relative'>
                <div className="line absolute h-11 w-1 top-[42%] left-5 bg-gray-900 rounded-full"></div>
                <div className='text-6xl absolute top-0 left-4'>.</div>
                <input
                  className='bg-[#eee] w-full px-12 py-3 rounded-md text-lg placeholder:text-base mt-5'
                  type="text"
                  placeholder='Add a pick-up location'
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  onClick={() => setPanelOpen(true)}
                />
                <div className='text-6xl absolute bottom-3 left-4'>.</div>
                <input
                  className='bg-[#eee] w-full px-12 py-3 rounded-md text-lg placeholder:text-base mt-3'
                  type="text" placeholder='Enter your destination'
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  onClick={() => setPanelOpen(true)}
                />
              </div>

            </form>
          </div>

          <div ref={panelRef} className='bg-white h-0'>
            <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
          </div>
        </div>

        <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 translate-y-full w-full px-3 py-8 bg-white'>
          <Vehiclepanel setConfirmRideOpen={setConfirmRideOpen} setVehiclePanelOpen={setVehiclePanelOpen} vehiclePanelCloseRef={vehiclePanelCloseRef} />
        </div>

        <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 translate-y-full w-full px-3 py-8 bg-white'>
          <ConfirmRide setLookingForDriverOpen={setLookingForDriverOpen} setConfirmRideOpen={setConfirmRideOpen} confirmRidePanelCloseRef={confirmRidePanelCloseRef} />
        </div>

        <div ref={lookingForDriverPanelRef} className='fixed z-10 bottom-0 translate-y-full w-full px-3 py-8 bg-white'>
          <LookingForDriver setConfirmRideOpen={setConfirmRideOpen} setLookingForDriverOpen={setLookingForDriverOpen} lookingForDriverPanelCloseRef={lookingForDriverPanelCloseRef} />
        </div>

        <div ref={driverConfirmedPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-8 bg-white'>
          <DriverConfirmed driverConfirmedOpen={driverConfirmedOpen} driverConfirmedPanelCloseRef={driverConfirmedPanelCloseRef} />
        </div>
      </div>


    </>

  )
}

export default Home
