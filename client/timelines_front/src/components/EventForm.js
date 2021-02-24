import {useState, useEffect} from "react";
import LocationForm from "./LocationForm";

const EventForm = ({events, eventDetails, locations}) =>{

const [name, setName] = useState("");
const [date, setDate] = useState("");
const [location, setLocation] = useState("");

    const handleEventSubmit = (e) => {
        e.preventDefault();
       
    const eventObject = {
      name: name,
      date: date,
      location: {id: location}
    }

      eventDetails(eventObject)
         
       console.log(eventObject);
  }


    const handleNameChange = (e) => {
        setName(e.target.value)
      
      }

    const handleDateChange = (e) => {
      setDate(e.target.value)
    }
    
    const handleLocationSelect = (e) => {
      setLocation(e.target.value)
    }

    const locationNodes = locations.map((location) => {
      if (location) {
        return (
        <option value={location.id}>
          {location.name}
        </option>
        )
      }
    });

    return (
        <form onSubmit={handleEventSubmit}>
        <label>
          Name:
          <input name="newEvent" type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Date:
          <input name="newEvent" type="text"  value={date} onChange={handleDateChange} />
        </label>
        <label>
          Location:
          <select onChange={handleLocationSelect}>
          {locationNodes}</select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
};

export default EventForm;