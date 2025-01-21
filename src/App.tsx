import React, { useState } from 'react';
import { MapView } from './components/Map';
import { Sidebar } from './components/Sidebar';
import { DroneList } from './components/DroneList';
import { EnvironmentalData } from './components/EnvironmentalData';
import { cn } from './utils/cn';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main
        className={cn(
          'flex-1 flex flex-col overflow-hidden transition-all duration-300',
          isSidebarOpen ? 'md:ml-64' : ''
        )}
      >
        <div className="flex-1 relative">
          <MapView />
        </div>

        <div className="h-1/3 p-4 bg-white border-t overflow-auto">
          <div className="space-y-4">
            <EnvironmentalData />
            <DroneList />
          </div>
        </div>
      </main>
    </div>
  );
}
