const MAP_SETTINGS = {
    DEFAULT_OPTIONS: {
        scrollwheel: false,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
    },
    DEFAULT_CENTER: {
        lat: 3.166480,
        lng: 101.748344
    },
    DEFAULT_ZOOM: 8,
    MARKER_SIZE: 35,
    PIXEL_OFFSET: {
        MARKER: {
            X: 0,
            Y: -35,
        },
    },
    DIRECTIONS_OPTIONS: { 
        suppressMarkers: true, 
        preserveViewport: true 
    },
    GOOGLE_MAP_URL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`
}

export default MAP_SETTINGS
