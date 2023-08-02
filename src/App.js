import { useEffect, useState } from 'react'
import CitySearch from './components/CitySearch'
import EventList from './components/EventList'
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api'
import { InfoAlert, ErrorAlert, WarningAlert } from './components/alert'
import './App.css';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenreschart';

export default function App() {
  const [events, setEvents] = useState([])
  const [currentNOE, setCurrentNOE] = useState(32)
  const [allLocations, setAllLocations] = useState([])
  const [currentCity, setCurrentCity] = useState("See all cities")
  const [infoAlert, setInfoAlert] = useState("")
  const [errorAlert, setErrorAlert] = useState("")
  const [warningAlert, setWarningAlert] = useState("")

  useEffect(() => {
    if (navigator.online) {
      setWarningAlert("")
    } else {
      setWarningAlert("You are in offline mode")
    }
    fetchData()
  }, [currentCity, currentNOE])

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }


  return (
    <div className="App">
      <h1>Meet App</h1>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
      </div>
      <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity} 
        setInfoAlert={setInfoAlert} />
      <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />
      <div className="charts-container">
      <CityEventsChart allLocations={allLocations} events={events} />
      <EventGenresChart events={events}/>
      </div>
      <EventList events={events} />
    </div>
  );
}