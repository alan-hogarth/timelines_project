import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Person from "../components/Person/Person";
import PersonDetails from './Person/PersonDetails';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {useState} from "react";


const TimelinePage = ({events, persons, personDetails, viewPersonDetails}) => {
    
    // TODO styles for battle event and non-battle-evetn, can be done in TimelinePage.css
      
    

    return (
        <>
        <h1>Timeline</h1>
            <VerticalTimeline>
            {events.map(event => {
                // let isBattleIcon = event.type ===="work";
                // conditional logic for hasPersonList to see if the event has a list of person to then
                // make the list of people button show up

              
                function ModalPersons() {
                    const [open, setOpen] = useState(false)
                  
                    return (
                      <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<Button>Show People</Button>}
                      >
                        <Modal.Header>{event.name}</Modal.Header>
                        <Modal.Content image>
                        <Image size='large' src='https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80' wrapped />
                          <Modal.Description>
                            <Header>Participants</Header>
                            <p>
                                {event.persons.map(currentPerson => {
                                    return ( 
                                        <ul>
                                    <li>Name: {currentPerson.name}</li>
                                    <li>Nationality: {currentPerson.nationality}</li>  
                                    <li>Birth: {currentPerson.birthDate}</li>
                                    <li>Death: {currentPerson.deathDate}</li>  
                                    </ul>
                                    )
                                })}                               
                            </p>
                          </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                          {/* <Button color='black' onClick={() => setOpen(false)}>
                            Nope
                          </Button> */}
                          <Button
                            content="Done"
                            labelPosition='right'
                            icon='checkmark'
                            onClick={() => setOpen(false)}
                            positive
                          />
                        </Modal.Actions>
                      </Modal>
                    )
                  }
                  
                

                return(
                    <VerticalTimelineElement
                        key={event.key}
                        date={event.date}
                        dateClassName="date"
                        // iconStyle={isBattleIcon ? battleIconStyle : non-battleIconStyle}
                        // icon={isBattleIcon ? <BattleIcon/> :<non-battleIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title">{event.name}</h3>
                        <h5 className="vertical-timeline-element-subtitle">{event.location.name}</h5>
                        <p id="description">{event.description} </p>
                        {/* <button onClick={renderPersonDetails()}>People</button>  */}
                        {/* this should have a popup for a list of people at the event */}
                        {ModalPersons()}
                    </VerticalTimelineElement>
                    );
                })
            }
            </VerticalTimeline>
        </>
    )
}

export default TimelinePage;