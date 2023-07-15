import React, { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';

const Map = () => {
  const [data, setData] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapRef = useRef(null);

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
    const initMap = () => {
      const mapOptions = {
        zoom: 4.5,
        center: { lat: 40.967243, lng: -93.771556 },
        mapId: '2894c194fdae4e32'
      };

      const map = new window.google.maps.Map(mapRef.current, mapOptions);

      const markers = data.map(item => {
        const markerOptions = {
          position: {
            lat: item.latitude,
            lng: item.longitude
          },
          map: map
        };

        const marker = new window.google.maps.Marker(markerOptions);
        marker.addListener('click', () => {
          setSelectedMarker({
            item: item.item,
            name: item.name
          });
        });
        return marker;
      });

      const heatmapData = data.map(item => {
        return new window.google.maps.LatLng(item.latitude, item.longitude);
      });

      // Create heatmap layer
      const heatmap = new window.google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        map: map
      });

      // Customize heatmap layer
      // heatmap.setMap(heatmap);
      heatmap.set('radius', 20);
      heatmap.set('opacity', 0.6);
      // heatmap.set('gradient', ['rgba(255, 0, 0, 0)', 'rgba(255, 0, 0, 1']);
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
  }, [data]);

  return (
    <>
      <div id="map" ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
    </>
  );
};

export default Map;
