import PersonDetails from './Person/PersonDetails';




const TimelinePage = ({personDetails}) => {
    

  const personNodes = personDetails.map((eventPeople, index)=>{
    return (
       <PersonDetails key={index} eventPeople={eventPeople}/>
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