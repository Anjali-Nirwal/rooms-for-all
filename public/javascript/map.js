mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v12",
    center: coordinates, // [lng, lat]
    zoom: 9,
});


  const marker = new mapboxgl.Marker({color : "red" })
    .setLngLat(coordinates) // array [lng, lat]
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(
    `<h4>${title}</h4>
    <p>Exact location will be provided after booking </p>`))
    .addTo(map);

