import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const SalesByRegionMap: React.FC = () => {
  return (
    <div className="bg-white p-4 shadow-md">
      <h2 className="text-xl font-bold mb-4">Sales by Region</h2>
      <ComposableMap>
        <Geographies geography="/path-to-geojson">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default SalesByRegionMap;