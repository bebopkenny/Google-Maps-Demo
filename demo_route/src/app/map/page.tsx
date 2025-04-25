'use client'
import { useState, useEffect } from 'react'
import { APIProvider,
        Map,
        AdvancedMarker,
        Pin,
        InfoWindow,
 } from '@vis.gl/react-google-maps'
import { NextApiRequest, NextApiResponse } from 'next'
import './page.css'

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
const GOOGLE_MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID;

const MapPage = () => {
    const position = { lat: 53.54, lng: 10 };
    console.log('API KEY: ', GOOGLE_MAPS_API_KEY)
    console.log('MAP ID', GOOGLE_MAP_ID)

    return (
        <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
            <div className="google-map">
                <Map 
                    zoom={9} 
                    center={position} 
                    mapId={GOOGLE_MAP_ID}
                >   
                </Map>
            </div>
        </APIProvider>
    )
}

export default MapPage;
// import { Map } from "@/components/Map";