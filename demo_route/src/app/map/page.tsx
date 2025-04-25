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

const GOOGLE_MAPS_API_KEY = process.env.NEXT_GOOGLE_MAP_API_KEY

const MapPage = () => {
    const position = { lat: 53.54, lng: 10 };

    return (
        <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
            <div >
                <Map zoom={9} center={position}></Map>
            </div>
        </APIProvider>
    )
}

export default MapPage;
// import { Map } from "@/components/Map";