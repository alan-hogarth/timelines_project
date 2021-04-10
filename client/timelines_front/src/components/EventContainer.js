// import React, { useEffect, useState} from "react";
// import EventList from "./Event/EventList";
// import FilterSearch from "./FilterSearch";
// import {Container, Header, Grid, Segment} from 'semantic-ui-react';

// const EventContainer = () => {

//     const [events, setEvents] = useState([]);
//     const [eventFilter, setEventFilter] = useState([])


//     // const fetchEvents = () => {

//     //     const eventURL = `http://localhost:8080/events`;
//     //     fetch(eventURL)
//     //     .then((res)=>res.json())
//     //     .then((data)=> {
//     //         // console.log(data)
//             setEvents(data)
//             setEventFilter(data)
//     //     })
//     // }

//     const handleUserFilter = (userInput) => {
//         const timelineDetails = events.filter((event)=>{
//             return event.name.toUpperCase().includes(userInput.toUpperCase())
//         })
//         setEventFilter(timelineDetails); 
//         }

    


//     const deleteEventEntry = (Id) => {
//         return fetch(`http://localhost:8080/events/${Id}`, {
//             method: "DELETE"
//         })
//     }

//     const handleDelete = Id => {
//         deleteEventEntry(Id);

//         setEvents(events.filter((event) => event.id !== Id));
//     }


//     useEffect(()=>{
//         // fetchEvents();
//         setEvents();
//     }, []);
    
// return (
//     <>
    
//         <br/>
//         <Container >
//             <Header as='h2' content='Events' textAlign='left'/>
//             <FilterSearch onUserInput={handleUserFilter}/>
//                 <Grid container columns={1} >
//                     <Grid.Column>
//                         {/* <Segment> */}
//                             <EventList filteredEvents = {eventFilter} deleteEntry={handleDelete}/> 
//                         {/* </Segment> */}
//                     </Grid.Column>
//                 </Grid> 
//         </Container>
    
//     </>
// )

// }
// export default EventContainer;