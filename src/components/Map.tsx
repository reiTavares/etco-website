import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  address: string;
  className?: string;
}

const Map = ({ address, className = "h-[300px]" }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  // ETCO coordinates (Rua Joaquim Floriano 72, Itaim Bibi, São Paulo)
  const coordinates = {
    lng: -46.677997,
    lat: -23.582666
  };

  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const token = formData.get('mapbox-token') as string;
    
    if (token) {
      setMapboxToken(token);
      setShowTokenInput(false);
      localStorage.setItem('mapbox-token', token);
    }
  };

  useEffect(() => {
    // Check if token exists in localStorage
    const savedToken = localStorage.getItem('mapbox-token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setShowTokenInput(false);
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [coordinates.lng, coordinates.lat],
      zoom: 15,
      attributionControl: false
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add marker for ETCO location
    marker.current = new mapboxgl.Marker({
      color: "#0070b9"
    })
      .setLngLat([coordinates.lng, coordinates.lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<strong>ETCO</strong><p>${address}</p>`)
      )
      .addTo(map.current);

    // Open popup by default
    marker.current.togglePopup();

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [address, mapboxToken]);

  if (showTokenInput) {
    return (
      <div className={`${className} bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center`}>
        <h3 className="text-lg font-medium mb-4 text-gray-800">Mapbox Token Necessário</h3>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Para visualizar o mapa, insira seu token público do Mapbox:
        </p>
        <form onSubmit={handleTokenSubmit} className="w-full">
          <input 
            type="text" 
            name="mapbox-token" 
            placeholder="Insira seu token público do Mapbox" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
            required
          />
          <button 
            type="submit" 
            className="w-full bg-etco-blue-500 text-white py-2 rounded-lg hover:bg-etco-blue-600 transition-colors"
          >
            Carregar Mapa
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4 text-center">
          Você pode obter seu token no <a href="https://account.mapbox.com/access-tokens/" target="_blank" rel="noopener noreferrer" className="text-etco-blue-500 hover:underline">site do Mapbox</a>
        </p>
      </div>
    );
  }

  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;
