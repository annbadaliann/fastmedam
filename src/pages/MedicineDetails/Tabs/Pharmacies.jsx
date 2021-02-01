import React, { useEffect, useState }  from "react";

import GoogleMapReact from "google-map-react";

import icon from '../../../assets/icons/location.png'

import PharmacyItem from "../PharmacyItem/PharmacyItem";

import medicineImg from "../../../assets/images/medicine.jpg";

import useStyles from "./TabsContent.style";

const Pharmacies = ({pharmacies, locations}) => {
  const [addresses, setAddresses] = useState([]);
  // const addresses = [
  //   {
  //     lat: 40.1872023,
  //     lng: 44.55820900000003
  //   },
  //   {
  //     lat: 40.1862024,
  //     lng: 44.55920900000003
  //   },
  //   {
  //     lat: 41.1872024,
  //     lng: 44.55520900000003
  //   },
  //   {
  //     lat: 40.1872024,
  //     lng: 44.55720900000003
  //   },
  //   {
  //     lat: 40.1842024,
  //     lng: 44.55920900000003
  //   },
  // ]

  useEffect(() => {
    if(pharmacies){
      setAddresses(pharmacies.addresses)
    }
  })

  const renderMarkers = (map, maps) => {
    locations.map(location => {

      return new maps.Marker({
        position: { lat:  location.lat, lng: location.lng },
        map,
        icon: {
          url: icon,
        }
      });
    })
  }

 
  const classes = useStyles();

  return (
    <div className={classes.pharmacyTab}>
      <div className={classes.pharmaciesList}>
        {pharmacies?.map((pharmacy) => {
          return <PharmacyItem pharmacy={pharmacy} key={pharmacy.id} />;
        })}
      </div>

      <div className={classes.map}>

      <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBpKF69rgtgYwZWCPeqYhdmD-ARYWMBdQE"
              }}
              center={{
                lat: locations[0].lat,
                lng: locations[0].lng
              }}
              defaultZoom={12}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
              />
      </div>
    </div>
  );
};

export default Pharmacies;
