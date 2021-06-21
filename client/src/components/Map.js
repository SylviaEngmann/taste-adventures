import React, { useState }  from 'react';
import  '../App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import createHistory from 'history/createBrowserHistory';


const history = createHistory({forceRefresh:true});

const mapPlaces = [
    {
        id: 1,
        country: "Ghana",
        location: [7.9465, 1.0232]
    },
    {
        id: 2,
        country: "Spain",
        location: [40.4637, 3.7492]
    },
    {
        id: 3,
        country: "Poland",
        location: [51.9194, 19.1451]
    },
    {
        id: 4,
        country: "Uganda",
        location: [1.3733, 32.2903]
    },
    {
        id: 5,
        country: "USA",
        location: [37.0902, -95.7129]
    }
]

const viewRecipes = {
    backgroundColor: "#F9A826",
    color: "#ffff",
    textAlign: "center",
    border: "none",
}

export default function Map() {
    

    return (
        <div className="">
            <MapContainer center={[51.477928, -0.001545]} zoom={1.5} scrollWheelZoom={false} id="mapid">
                <TileLayer 
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={[51.505, -0.09]}>
                    <Popup> 
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
                {
                    mapPlaces.map((p) => (
                        <Marker key={p.id} position={p.location}>
                            <Popup>
                                {p.country}
                                <button style={viewRecipes}>View Recipes</button>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
}