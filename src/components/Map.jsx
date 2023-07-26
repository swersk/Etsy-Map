/* global google */
import React, { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';
import '../styles/App.css';
import FloatingPanel from './FloatingPanel';
import 'cesium/Build/Cesium/Widgets/widgets.css';


const Map = () => {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([])
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markerOpen, setMarkerOpen] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const infoWindowsRef = useRef({});
  const [showHeatMap, setShowHeatMap] = useState(true);
  const [heatmap, setHeatmap] = useState(null);
  const [markers, setShowMarkers] = useState(true);
  const [radius, setRadius] = useState(55);
  const [filteredData, setFilteredData] = useState([]);
  const [initialZoom, setInitialZoom] = useState(4.5);
  const [markersArr, setMarkersArr] = useState([]);
  const [center, setCenter] = useState({ lat: 38.167243, lng: -98.5795 })

  const handleMarkers = () => {
    setShowMarkers(!markers)
  }

  const formatName = (string) => {
    //return string split at the space
    return string.split(' ')[0]
  }

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
              buyer: item.buyer,
              date: item['Date Paid'],
              name: formatName(item['Ship Name']),
              quantity: item.Quantity,
              address1: item['Ship Address1'],
              city: item['Ship City'],
              state: item['Ship State'],
              latitude: parseFloat(item.Latitude),
              longitude: parseFloat(item.Longitude)
            }));
            setData(addressData);
            setInitialData(addressData);
          }
        });
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setInitialZoom(3.1); // Set a lower initial zoom level for mobile
        setCenter({ lat: 28, lng: -96.5795 });
        setRadius(30);
      } else if (window.innerWidth <= 1024) {
        setInitialZoom(4.0);  // For iPads
        setCenter({ lat: 41.267243, lng: -95.771556 });
      } else {
        setInitialZoom(4.6); // For computers
        setCenter({ lat: 38.167243, lng: -98.5795 });
      }
    };

    // Call the handleResize function initially and whenever the window is resized
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Create marker instances
    if (markers && data) {
      addMarkers()
    } else {
      markersArr.map((marker) => {
        marker.setMap(null);
      })
    }
  }, [markers])

  const addMarkers = () => {
    if (markers && data) {
      const markers = data.map(item => {
        const markerOptions = {
          position: {
            lat: item.latitude,
            lng: item.longitude
          },
          map: mapInstanceRef.current
        };

        if (item.item.includes("Italian") && data.length < initialData.length) {
          markerOptions.icon = {
            url: "/italy.png",
            scaledSize: new window.google.maps.Size(40, 40)
          };
        }

        // if (item.item.includes("Camino") && data.length < initialData.length) {
        //   markerOptions.icon = {
        //     url: "/caminoArrow.png",
        //     scaledSize: new window.google.maps.Size(40, 40)
        //   };
        // }

        const marker = new window.google.maps.Marker(markerOptions);

        // Create infowindow instances
        const infoWindowContent = `
              <div id='modalContent'>
                ${item.item === "Italian Bandages, Italy Plasters, 30 pcs" ? `
                    <div >
                      <img src="/italyListingPic.avif" alt="Product image" style="width: 100px; height: 100px;"/>
                    </div>
                  ` : item.item === "Italian Bandages (2-pack), Italy Plasters, 30 pcs each" ? `
                    <div >
                      <img src="/italyListingPicx2.avif" alt="Product image" style="width: 100px; height: 100px;"/>
                    </div>
                  ` : item.item === "Italian bandages, 30 pcs" ? `
                  <div >
                     <img src="/italyListingPic.avif" alt="Product image" style="width: 100px; height: 100px;"/>
                   </div>
                  ` : item.item === "Italian Bandages (3-pack), Italy Plasters, 30 pcs each" ? `
                    <div >
                      <img src="/italyListingPicx3.jpg" alt="Product image" style="width: 100px; height: 100px;"/>
                    </div>
                  ` : item.item === "Camino de Santiago Bandages, Plasters, 30 pcs" ? `
                    <div>
                      <img src="/caminoColorful.avif" alt="Product image" style="width: 100px; height: 100px;"/>
                    </div>
                  ` : item.item === "Fun Sticker Pack (3 pcs), Camino de Santiago" ? `
                  <div>
                    <img src="/3stickers.jpg" alt="Product image" style="width: 100px; height: 100px;"/>
                  </div>
                `  : item.item === "Sticker Pack (4 pcs), Camino de Santiago" ? `
                <div>
                  <img src="/4stickers.avif" alt="Product image" style="width: 100px; height: 100px;"/>
                </div>
              `  : item.item === "Bandages (2-pack), Camino de Santiago Plasters, 30 pcs per box" || "Bandages, Plasters (2 pack) - Camino de Santiago" ? `
              <div>
                <img src="/2pack.avif" alt="Product image" style="width: 100px; height: 100px;"/>
              </div>
            `: item.item === "Sticker, Buen Camino! (Camino de Santiago)" || item.item === "Sticker, Buen Camino de Santiago" ? `
            <div>
              <img src="/1sticker.jpg" alt="Product image" style="width: 100px; height: 100px;"/>
            </div>
          `   : ''
          }
                <div id="info-content">
                  <div>
                  <img src="/person.png"
                  class="infoImageName"> ${item.name}
                  </div>
                  <div>
                  <img src="/location2.png"  class="infoImageAddress" style="margin-right: 13px;">${item.city}, ${item.state}
                  </div>
                  <div>
                  <img src="/item2.png" class="infoImageItem"> ${item.item}
                  </div>
                  <div>
                  <img src="/info.png" class="infoImageQuantity"> ${item.quantity} item${item.quantity > 1 ? 's' : ''}
                </div>
                  <div>
                  <img src="/date.png" class="infoImageDate"> ${item.date}
                  </div>
                </div>
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
      setMarkersArr(markers)
    }
  }

  const addHeatmap = () => {
    if (!window.google || !window.google.maps) {
      return
    } else {

      // Create heatmap instance
      const heatmapData = data.map(item => {
        return new window.google.maps.LatLng(item.latitude, item.longitude);
      });

      // Create heatmap layer
      const heatmap = new window.google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        map: mapInstanceRef.current
      });

      // Customize heatmap layer
      heatmap.set('radius', radius)
      heatmap.set('opacity', 0.8);
      console.log('HEATMAP!!!', heatmap)
      setHeatmap(heatmap)
    }
  }

  useEffect(() => {
    if (showHeatMap) {
      addHeatmap()
    } else {
      heatmap.setMap(null);
    }
  }, [showHeatMap])


  useEffect(() => {
    // Create new map instance
    const initMap = () => {
      const mapOptions = {
        zoom: initialZoom,
        center: center,
        mapId: '2894c194fdae4e32',
        streetViewControl: true
      };

      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions);

      //add markers
      if (markers && data) {
        addMarkers();
      }


      //add heatmap function
      addHeatmap()
    };

    // Check if Google API is loaded
    if (!window.google || !window.google.maps) {
      // if not, load it dynamically
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
      <FloatingPanel setShowMarkers={setShowMarkers} setShowHeatMap={setShowHeatMap} showHeatMap={showHeatMap} data={data} setData={setData} handleMarkers={handleMarkers} initialData={initialData} filteredData={filteredData} setFilteredData={setFilteredData} />
      <div id="map" ref={mapRef} className="map-container"
        style={{
          width: '100%',
          height: '94%'
        }}
      ></div>
    </>
  );
};

export default Map;








