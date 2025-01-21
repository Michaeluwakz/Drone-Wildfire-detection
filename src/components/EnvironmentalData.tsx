import React from 'react';
import { Wind, Thermometer, Droplets } from 'lucide-react';
import { useStore } from '../store/useStore';
import { format } from 'date-fns';

export function EnvironmentalData() {
  const { environmentalData } = useStore();
  const latestData = environmentalData[environmentalData.length - 1];

  if (!latestData) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Environmental Conditions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
          <Thermometer className="h-6 w-6 text-red-500" />
          <div>
            <p className="text-sm text-gray-500">Temperature</p>
            <p className="font-semibold">{latestData.temperature}°C</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
          <Droplets className="h-6 w-6 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Humidity</p>
            <p className="font-semibold">{latestData.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
          <Wind className="h-6 w-6 text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Wind</p>
            <p className="font-semibold">
              {latestData.windSpeed} km/h {latestData.windDirection}
            </p>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Last updated: {format(new Date(latestData.timestamp), 'PPpp')}
      </p>
    </div>
  );
}
