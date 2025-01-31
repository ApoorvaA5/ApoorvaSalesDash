import { FeatureCollection, Polygon } from 'geojson';

const geoJsonData: FeatureCollection<Polygon> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-120, 50],
            [-70, 50],
            [-70, 20],
            [-120, 20],
            [-120, 50]
          ]
        ]
      },
      properties: {
        name: "North America",
        color: "#ff9999",
        hoverColor: "#ff6666",
        borderColor: "#cc0000"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-70, 50],
            [-20, 50],
            [-20, 20],
            [-70, 20],
            [-70, 50]
          ]
        ]
      },
      properties: {
        name: "Europe",
        color: "#99ff99",
        hoverColor: "#66ff66",
        borderColor: "#00cc00"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-20, 50],
            [30, 50],
            [30, 20],
            [-20, 20],
            [-20, 50]
          ]
        ]
      },
      properties: {
        name: "Asia",
        color: "#9999ff",
        hoverColor: "#6666ff",
        borderColor: "#0000cc"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-120, -10],
            [-70, -10],
            [-70, -40],
            [-120, -40],
            [-120, -10]
          ]
        ]
      },
      properties: {
        name: "Africa",
        color: "#ffff99",
        hoverColor: "#ffff66",
        borderColor: "#cccc00"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-70, -10],
            [10, -10],
            [10, -40],
            [-70, -40],
            [-70, -10]
          ]
        ]
      },
      properties: {
        name: "South America",
        color: "#ffcc99",
        hoverColor: "#ffb366",
        borderColor: "#cc6600"
      }
    }
  ]
};
