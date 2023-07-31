import { useEffect, useState } from 'react'
import CitySearch from './components/CitySearch'
import EventList from './components/EventList'
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api'
import { InfoAlert, ErrorAlert, WarningAlert } from './components/alert'
import './App.css';

export default function App() {
  const [events, setEvents] = useState([])
  const [currentNOE, setCurrentNOE] = useState(32)
  const [allLocations, setAllLocations] = useState([])
  const [currentCity, setCurrentCity] = useState("See all cities")
  const [infoAlert, setInfoAlert] = useState("")
  const [errorAlert, setErrorAlert] = useState("")
  const [warningAlert, setWarningAlert] = useState("")

  useEffect(() => {
    let warntext
    if (navigator.online) {
      warntext = ""
    } else {
      warntext = "You are currently offline and looking at last stored data."
    }
    setWarningAlert(warntext)
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
      <div className="alerts-container">
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
      </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
      <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />
      <EventList events={events} />
    </div>
  );
}