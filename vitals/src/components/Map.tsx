import React from 'react'
import MapGl, {Marker} from "react-map-gl"


const Map = () => {
    const API_KEY = "pk.eyJ1IjoiYXVzdGluZWRhdmlkMSIsImEiOiJjbGZpYWRudm0xb2gzM3NuejNrNGNkOGVzIn0.qBHQgXC8t_U9rtfiG9laqQ"
  return (
    <div className='map-div'>
         <MapGl
         mapboxAccessToken={API_KEY}
         initialViewState={{
          longitude: 7.548949,
          latitude: 6.459964,
          zoom: 3.5
        }}
         style={{width: "100%", height: "100%"}}
         mapStyle = "mapbox://styles/austinedavid1/clfj5diqm002x01pcfhi59coh"
         
         attributionControl={true}
         doubleClickZoom={true}
        >
       <Marker
        longitude={7.548949}
        latitude={6.459964}
        
        draggable={true}
       >
        
       </Marker>
        </MapGl>
    </div>
  )
}

export default Map