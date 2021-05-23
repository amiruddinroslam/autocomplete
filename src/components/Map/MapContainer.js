import WrappedMap from './Map'
import MAP_SETTINGS from '../../constants/constant'

const MapContainer = () => {
    return (
        <div style={{ height: "100vh" }}>
            <WrappedMap 
                googleMapURL={MAP_SETTINGS.GOOGLE_MAP_URL}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />} />
        </div>
    )
}

export default MapContainer