import React, { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';
import '../styles/App.css';
import FloatingPanel from './FloatingPanel';

const Map = () => {
  const [data, setData] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markerOpen, setMarkerOpen] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const infoWindowsRef = useRef({});
  const [showHeatMap, setShowHeatMap] = useState(true);
  const [heatmap, setHeatmap] = useState(null);
  const [markers, setShowMarkers] = useState(true);

  //parse CSV data
  useEffect(() => {
    fetch('/Etsy2023G.csv')
      .then(response => response.blob())
      .then(blob => {
        Papa.parse(blob, {
          header: true,
          delimiter: ",",
          skipEmptyLines: 'greedy',
          complete: function (results) {
            const addressData = results.data.map(item => ({
              item: item['Item Name'],
              buyer: item.Buyer,
              date: item['Date Paid'],
              name: item['Ship Name'],
              quantity: item.Quantity,
              latitude: parseFloat(item.Latitude),
              longitude: parseFloat(item.Longitude)
            }));
            setData(addressData);
          }
        });
      });
  }, []);

  useEffect(() => {
    //create new map instance
    const initMap = () => {
      const mapOptions = {
        zoom: 4.5,
        center: { lat: 40.967243, lng: -93.771556 },
        mapId: '2894c194fdae4e32'
      };

      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions);

      // create marker instances
        if (markers) {
        const markers = data.map(item => {
          const markerOptions = {
            position: {
              lat: item.latitude,
              lng: item.longitude
            },
            map: mapInstanceRef.current
          };

          const marker = new window.google.maps.Marker(markerOptions);

          // Create infowindow instances
          const infoWindowContent = `
            <div id='modalContent'>
              <div id='modalHeader'>
                <h2>More Info</h2>
              </div>
              <div>
                <b>Name:</b> ${item.name}
              </div>
              <div>
                <b>Item:</b> ${item.item}
              </div>
              <div>
                <b>Date:</b> ${item.date}
              </div>
              <div>
                <b>Quantity:</b> ${item.quantity}
              </div><br />
            </div>
          `;

          const infoWindow = new window.google.maps.InfoWindow({
            content: infoWindowContent
          });

          // Add click handler
          marker.addListener('click', () => {
            setSelectedMarker(item);
            setMarkerOpen(true);

            // Close any previously opened info windows
            Object.values(infoWindowsRef.current).forEach(infoWindow => {
              infoWindow.close();
            });

            // Open the info window for the clicked marker
            infoWindow.open(mapInstanceRef.current, marker);
            infoWindowsRef.current[item.name] = infoWindow;
          });

          return marker;
        })
      };

        if (showHeatMap) {
        // Create heatmap instance
        const heatmapData = data.map(item => {
          return new window.google.maps.LatLng(item.latitude, item.longitude);
        });

        // create heatmap layer
        const heatmap = new window.google.maps.visualization.HeatmapLayer({
          data: heatmapData,
          map: mapInstanceRef.current
        });

        // customize heatmap layer
        heatmap.set('radius', 20);
        heatmap.set('opacity', 0.6);
      }
    };

    if (!window.google || !window.google.maps) {
      // Google Maps API not loaded, so load it dynamically
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places,visualization&callback=initMap`;
      googleMapsScript.async = true;
      googleMapsScript.defer = true;
      googleMapsScript.onerror = () => {
        throw new Error('Failed to load Google Maps API script.');
      };

      // Check if the script has already been appended
      const existingScript = document.querySelector(
        'script[src^="https://maps.googleapis.com/maps/api/js?"]'
      );
      if (!existingScript) {
        document.head.appendChild(googleMapsScript);
      } else {
        existingScript.onload = initMap;
      }
      window.initMap = initMap;
    } else {
      // Google Maps API already loaded, so directly call initMap
      initMap();
    }
    setHeatmap(heatmap)
  }, [data, showHeatMap, markers]);

  const handleMarkers = () => {
    setShowMarkers(!markers)
  }

  return (
    <>
      <FloatingPanel setShowHeatMap={setShowHeatMap} showHeatMap={showHeatMap} heatmap={heatmap} data={data} setData={setData} handleMarkers={handleMarkers}/>
      <div id="map" ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
    </>
  );
};

export default Map;
