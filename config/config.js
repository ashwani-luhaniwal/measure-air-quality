module.exports = {
    URL: 'http://localhost/ica',
    URL_LOGIN: 'http://localhost/login',
    LATITUDE_INITIAL: '39.3781',    // Center of Spain
    LONGITUDE_INITIAL: '-3.6795366',
    LATLNG: '36.1440, -8.411540, 43.527061, 3.1934',    // map bounds in form lat1, lng1, lat2, lng2
    MAPS_KEY: 'AIzaSyCgncHE9VhehCiKENUJB0y19GURax6WXqk',
    AQICN_KEY: 'e9f9eb824b65fdc5a494c0d4eedb10669c559350',
    GOOGLEMAPS_CONFIG: {
        key: 'AIzaSyCgncHE9VhehCiKENUJB0y19GURax6WXqk',
        stagger_time: 1000, // for elevationPath
        encode_polylines: false,
        secure: true,   // use https
    }
}