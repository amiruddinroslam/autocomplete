import { useState, useEffect, useRef, useCallback } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import MAP_SETTINGS from '../../constants/constant'
import { useSelector } from 'react-redux';
import { map } from 'lodash';

const Map = () => {
    const locations = useSelector(state => state.locations.locations)
    const [latLng, setLatLng] = useState({})

    const geocoder = new window.google.maps.Geocoder();
    // const mapRef = useRef()
    // const onMapLoad = useCallback(map => {
    //     mapRef.current = map
    // }, [])
    // const panTo = useCallback(({ lat, lng }) => {
    //     mapRef.current.panTo({ lat, lng });
    //     mapRef.current.setZoom(14);
    // }, [])
    useEffect(() => {
        if (locations.length) {
            geocoder.geocode({
              'placeId': locations[locations.length - 1].place_id
            }, (response, status) => {
              if (status === 'OK') {
                setLatLng({
                  lat: response[0].geometry.location.lat(),
                  lng: response[0].geometry.location.lat()
                })
              }
            })
            console.log(latLng)
        }
    })

    return (
        <>
            <GoogleMap 
                defaultZoom={MAP_SETTINGS.DEFAULT_ZOOM} 
                defaultCenter={MAP_SETTINGS.DEFAULT_CENTER}
                defaultOptions={MAP_SETTINGS.DEFAULT_OPTIONS}
                >
                <Marker
                    position={latLng}
                />
            </GoogleMap>
        </>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
export default WrappedMap