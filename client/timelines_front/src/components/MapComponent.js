import {useState, useEffect} from "react";
import EventDetails from './EventDetails';
import Event from "./Event";
import "../containers/TimeLineContainer.css";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const MapComponent = ({events, locations, persons, viewEventDetails, eventDetails}) => {

    const [currentLocation, setCurrentLocation] = useState({ lat: 53.4084, lng: -2.9916 });
    const [zoom, setZoom] = useState(5);
    const markerIcon = L.icon({  
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Muskets.svg/1488px-Muskets.svg.png", 
        iconSize: [32, 32] 
      });

    if (!events || !locations || !persons){
        return <span>SOMETHING AINT RIGHT</span>;
    }

        const eventMarker = events.map((currentEvent, index)=>{
            return (
                <Marker key={index} position={[currentEvent.location.latitude, currentEvent.location.longitude]} icon={markerIcon} >
                <Popup>
                    <Event
                    event={currentEvent}
                    viewEventDetails={viewEventDetails}
                /> 
                </Popup>
              </Marker>
            )
        })


        const renderEventDetails = () => {
            if ( eventDetails ){
                return (<EventDetails eventDetails={eventDetails} events={events}/>)
                
            } 
            return null;
        }




        return (
            <>
            <div>
            <MapContainer id = 'mapid' center={currentLocation} zoom={zoom} scrollWheelZoom={false} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             {/* <div className="ui raised very padded text container segment"> */}
            {eventMarker}
            {/* </div> */}
            </MapContainer>
           
            {renderEventDetails()}
            </div>
             
            </>
        )

 }

export default MapComponent;
