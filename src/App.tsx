import React, { useState } from 'react';
import { MapView } from './components/Map';
import { Sidebar } from './components/Sidebar';
import { DroneList } from './components/DroneList';
import type { DroneStatus, WildfireAlert } from './types';

// Mock data for demonstration
const mockDrones: DroneStatus[] = [
  {
    id: '1',
    name: 'Drone-01',
    status: 'available',
    battery: 85,
    location: { lat: 37.7749, lng: -122.4194 },
    lastMaintenance: '2024-02-20',
    type: 'monitoring'
  },
  {
    id: '2',
    name: 'Drone-02',
    status: 'deployed',
    battery: 65,
    location: { lat: 37.3382, lng: -121.8863 },
    lastMaintenance: '2024-02-18',
    type: 'firefighting'
  }
];

const mockWildfires: WildfireAlert[] = [
  {
    id: '1',
    severity: 'high',
    location: { lat: 37.3382, lng: -121.8863 },
    detectedAt: '2024-02-21T10:30:00Z',
    status: 'active',
    area: 150
  }
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <main className={cn(
        "flex-1 flex flex-col overflow-hidden transition-all duration-300",
        isSidebarOpen ? "md:ml-64" : ""
      )}>
        <div className="flex-1 relative">
          <MapView wildfires={mockWildfires} drones={mockDrones} />
        </div>
        
        <div className="h-1/3 p-4 bg-white border-t">
          <DroneList drones={mockDrones} />
        </div>
      </main>
    </div>
  );
}

export default App;