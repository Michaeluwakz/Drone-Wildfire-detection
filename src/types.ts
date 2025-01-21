export interface DroneStatus {
  id: string;
  name: string;
  status: 'available' | 'deployed' | 'maintenance' | 'charging';
  battery: number;
  location: {
    lat: number;
    lng: number;
  };
  lastMaintenance: string;
  type: 'monitoring' | 'firefighting';
}

export interface WildfireAlert {
  id: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  location: {
    lat: number;
    lng: number;
  };
  detectedAt: string;
  status: 'active' | 'contained' | 'extinguished';
  area: number; // in hectares
}

export interface EnvironmentalData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  timestamp: string;
}