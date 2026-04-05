
import { useState, useEffect } from "react"
import Map from "./components/Map"
import Loader from "./components/Loader"
import Heade from "./components/Header"
import Header from "./components/Header";

const MOCK_EVENTS = [
  {
    id: 'EONET_1',
    title: 'Mock Wildfire',
    categories: [{ id: 8 }],
    geometries: [
      { coordinates: [-122.8756, 42.3256] }
    ]
  }
];

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events');
        if (!res.ok) throw new Error('Network response was not ok');
        const { events } = await res.json();
        setEventData(events);
      } catch (error) {
        // Use mock data if API fails
        setEventData(MOCK_EVENTS);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);


  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  );
}

export default App;