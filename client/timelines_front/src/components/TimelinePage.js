import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Person from "../components/Person/Person";
import PersonDetails from './Person/PersonDetails';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {useState} from "react";



const TimelinePage = ({events, persons, personDetails, viewPersonDetails}) => {
    

  const personNodes = events.map((event, index)=>{
    return (
       <PersonDetails key={index} event={event}/>
    )
})


    return (
      <>
      <h1>Timeline</h1>
      <p>
         {personNodes}
      </p>    
      </>
    )
}


export default TimelinePage;