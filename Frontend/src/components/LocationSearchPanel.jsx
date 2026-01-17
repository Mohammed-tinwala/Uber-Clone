import React from 'react'

const LocationSearchPanel = (props) => {

  const locations = [
    {
      icon: "ri-store-3-fill",
      title: "City Mall Road",
      description: "Near Gumanpura, Kota, Rajasthan 324001"
    },
    {
      icon: "ri-train-fill",
      title: "Railway Station",
      description: "Kota Junction, Station Road · 2.4 km"
    },
    {
      icon: "ri-plane-line",
      title: "Airport Terminal",
      description: "Jaipur International Airport · 5.8 km"
    },
    {
      icon: "ri-hospital-fill",
      title: "MBS Hospital",
      description: "Nayapura, Kota · Government Medical College Hospital"
    },
    {
      icon: "ri-school-fill",
      title: "Allen Career Institute",
      description: "Indra Vihar, Kota · Coaching Hub"
    },
    {
      icon: "ri-building-4-fill",
      title: "Samarth Plaza",
      description: "Gumanpura Main Road · Shopping Complex"
    },
    {
      icon: "ri-map-pin-2-fill",
      title: "Seven Wonders Park",
      description: "Vallabh Bari, Kota · Tourist Attraction"
    },
    {
      icon: "ri-hotel-fill",
      title: "Hotel Clarks Premier",
      description: "Jhalawar Road · 1.9 km"
    },
    {
      icon: "ri-bank-fill",
      title: "State Bank of India",
      description: "Dadabari Branch · ATM Available"
    },
    {
      icon: "ri-home-4-fill",
      title: "Dadabari Housing Board",
      description: "Residential Area · Kota"
    }
  ]


  return (
    <div className="flex flex-col gap-2 overflow-scroll h-full px-2">
      {locations.map((location, index) => (
        <div
          key={index}
          className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-3 rounded-lg"
          onClick={() => {
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }}
        >
          <div className="w-10 h-10 bg-[#eee] rounded-full flex items-center justify-center">
            <i className={location.icon}></i>
          </div>

          <div className="flex flex-col">
            <h4 className="font-medium text-base">{location.title}</h4>
            <p className="text-sm text-gray-600">
              {location.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LocationSearchPanel
