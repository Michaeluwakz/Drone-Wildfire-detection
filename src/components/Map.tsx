import React, { useState } from 'react';
import Map, { Marker, NavigationControl, ScaleControl } from 'react-map-gl';
import type { WildfireAlert, DroneStatus } from '../types';

interface MapViewProps {
  wildfires: WildfireAlert[];
  drones: DroneStatus[];
}

export function MapView({ wildfires, drones }: MapViewProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="text-white">Loading map...</div>
        </div>
      )}
      
      <Map
        initialViewState={{
          longitude: -119.4179,
          latitude: 36.7783,
          zoom: 5
        }}
        onLoad={() => setIsLoaded(true)}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken="pk.eyJ1IjoiYWVyb2tuaXRlIiwiYSI6ImNscjBpOXd4YjAxMnoyam1vYmx1Z2J1N3IifQ.7XqFJ3U3IqyXYXxZ3tX5Zg"
      >
        <NavigationControl position="top-right" />
        <ScaleControl position="bottom-right" />
        
        {wildfires.map((wildfire) => (
          <Marker
            key={wildfire.id}
            longitude={wildfire.location.lng}
            latitude={wildfire.location.lat}
          >
            <div 
              className={`p-2 rounded-full bg-red-500 bg-opacity-75 pulse-${wildfire.severity}`}
              title={`Wildfire - Severity: ${wildfire.severity}, Area: ${wildfire.area}ha`}
            />
          </Marker>
        ))}

        {drones.map((drone) => (
          <Marker
            key={drone.id}
            longitude={drone.location.lng}
            latitude={drone.location.lat}
          >
            <div 
              className={`p-2 rounded-full bg-blue-500 ${
                drone.status === 'deployed' ? 'animate-pulse' : ''
              }`}
              title={`${drone.name} - ${drone.status} (${drone.battery}% battery)`}
            />
          </Marker>
        ))}
      </Map>
    </div>
  );
}