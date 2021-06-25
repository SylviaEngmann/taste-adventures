import React, { useState }  from 'react';
import  '../App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const viewRecipes = {
    backgroundColor: "#F9A826",
    color: "#ffff",
    textAlign: "center",
    border: "none",
}

export default function Map(props) {
    

    return (
        <div className="">
            <MapContainer center={[51.477928, -0.001545]} zoom={1.5} scrollWheelZoom={false} id="mapid">
                <TileLayer 
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    props.countries.map((p) => (
                        <Marker key={p.id} position={p.location}>
                            <Popup>
                                {p.country}
                                {/* <button style={viewRecipes} onClick={(e) => props.countries.countryMealsCb(p.country)} >View Recipes</button>  */}
                                <button style={viewRecipes} onClick={(e) => props.countryMealsCb(p.country)} >View Recipes</button>  
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
}