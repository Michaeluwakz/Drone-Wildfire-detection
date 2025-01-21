import React from 'react';
import { Menu, X, LayoutDashboard, Plane, Bell, BarChart3 } from 'lucide-react';
import { cn } from '../utils/cn';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={onToggle}
        className={cn(
          'fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-900 text-white md:hidden',
          isOpen && 'hidden'
        )}
      >
        <Menu className="h-6 w-6" />
      </button>

      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold">Aeroknite</h1>
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#dashboard"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#drones"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Plane className="h-5 w-5" />
                <span>Drone Fleet</span>
              </a>
            </li>
            <li>
              <a
                href="#alerts"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Bell className="h-5 w-5" />
                <span>Alerts</span>
              </a>
            </li>
            <li>
              <a
                href="#analytics"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Analytics</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
