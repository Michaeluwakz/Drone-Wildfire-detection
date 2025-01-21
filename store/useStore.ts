import { create } from 'zustand';
import type { DroneStatus, WildfireAlert, EnvironmentalData } from '../types';

interface Store {
  drones: DroneStatus[];
  wildfires: WildfireAlert[];
  environmentalData: EnvironmentalData[];
  selectedDrone: string | null;
  selectedWildfire: string | null;
  setSelectedDrone: (id: string | null) => void;
  setSelectedWildfire: (id: string | null) => void;
  deployDrone: (droneId: string, wildfireId: string) => void;
  updateEnvironmentalData: (data: EnvironmentalData) => void;
}

export const useStore = create<Store>((set) => ({
  drones: [
    {
      id: '1',
      name: 'Drone-01',
      status: 'available',
      battery: 85,
      location: { lat: 37.7749, lng: -122.4194 },
      lastMaintenance: '2024-02-20',
      type: 'monitoring',
    },
    {
      id: '2',
      name: 'Drone-02',
      status: 'deployed',
      battery: 65,
      location: { lat: 37.3382, lng: -121.8863 },
      lastMaintenance: '2024-02-18',
      type: 'firefighting',
    },
  ],
  wildfires: [
    {
      id: '1',
      severity: 'high',
      location: { lat: 37.3382, lng: -121.8863 },
      detectedAt: '2024-02-21T10:30:00Z',
      status: 'active',
      area: 150,
    },
  ],
  environmentalData: [],
  selectedDrone: null,
  selectedWildfire: null,
  setSelectedDrone: (id) => set({ selectedDrone: id }),
  setSelectedWildfire: (id) => set({ selectedWildfire: id }),
  deployDrone: (droneId, wildfireId) =>
    set((state) => ({
      drones: state.drones.map((drone) =>
        drone.id === droneId
          ? {
              ...drone,
              status: 'deployed',
              location: state.wildfires.find((w) => w.id === wildfireId)
                ?.location || drone.location,
            }
          : drone
      ),
    })),
  updateEnvironmentalData: (data) =>
    set((state) => ({
      environmentalData: [...state.environmentalData, data],
    })),
}));
