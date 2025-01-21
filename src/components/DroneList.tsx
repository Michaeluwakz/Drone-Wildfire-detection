import React from 'react';
import { Battery, Plane, AlertTriangle } from 'lucide-react';
import type { DroneStatus } from '../types';
import { useStore } from '../store/useStore';

export function DroneList() {
  const { drones } = useStore();

  if (!drones.length) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-xl font-bold mb-2">No Drones Available</h2>
        <p className="text-gray-600">No drone data is currently available.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Drone Fleet Status</h2>
      <div className="space-y-4 overflow-y-auto max-h-[calc(100vh/3-8rem)]">
        {drones.map((drone) => (
          <div
            key={drone.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg gap-4"
          >
            <div className="flex items-center space-x-4">
              <Plane
                className={`h-6 w-6 ${
                  drone.status === 'available'
                    ? 'text-green-500'
                    : drone.status === 'deployed'
                    ? 'text-blue-500'
                    : drone.status === 'maintenance'
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}
              />
              <div>
                <h3 className="font-semibold">{drone.name}</h3>
                <p className="text-sm text-gray-500 capitalize">
                  {drone.status}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-end space-x-4 ml-10 sm:ml-0">
              <div className="flex items-center">
                <Battery
                  className={`h-5 w-5 mr-1 ${
                    drone.battery < 20
                      ? 'text-red-500'
                      : drone.battery < 50
                      ? 'text-yellow-500'
                      : 'text-green-500'
                  }`}
                />
                <span
                  className={
                    drone.battery < 20
                      ? 'text-red-500'
                      : drone.battery < 50
                      ? 'text-yellow-500'
                      : 'text-green-500'
                  }
                >
                  {drone.battery}%
                </span>
              </div>
              <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
