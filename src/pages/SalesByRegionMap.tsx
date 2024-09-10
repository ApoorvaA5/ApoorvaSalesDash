import React, { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FeatureCollection, Polygon } from 'geojson';

// Define your GeoJSON data as a FeatureCollection with polygons
const geoJsonData: FeatureCollection<Polygon> = {
  type: "FeatureCollection",
  features: [
    // ... (your updated GeoJSON data here)
  ]
};

// Function to style the GeoJSON features
const style = (feature: any) => ({
  fillColor: feature.properties.color || '#ffffff',
  weight: 2,
  opacity: 1,
  color: feature.properties.borderColor || '#000000',
  dashArray: '3',
  fillOpacity: 0.7
});

// Function to handle mouse hover
const onEachFeature = (feature: any, layer: any) => {
  layer.on({
    mouseover: (e: any) => {
      e.target.setStyle({
        fillColor: feature.properties.hoverColor || '#ff6666',
        weight: 2,
        opacity: 1,
        color: feature.properties.borderColor || '#000000',
        dashArray: '3',
        fillOpacity: 0.9
      });
    },
    mouseout: (e: any) => {
      e.target.setStyle(style(feature));
    }
  });
};

// Component to set the initial map view
const MapSetup: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    map.setView([20, 0], 2); // Center and zoom
  }, [map]);

  return null;
};

const SalesByRegionMap: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Sales by Region</h2>
      <MapContainer 
        style={{ height: '500px', width: '100%' }}
        zoom={2}
        center={[20, 0]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // If using a recent version, attribution might be set differently
          // Check documentation if necessary
        />
        <MapSetup />
        <GeoJSON 
          data={geoJsonData} 
          style={style}
          onEachFeature={onEachFeature}
        />
      </MapContainer>
    </div>
  );
};

export default SalesByRegionMap;
