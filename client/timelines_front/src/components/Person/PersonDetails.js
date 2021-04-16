import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {useState, useEffect} from "react";

const PersonDetails = ({eventPeople}) => {

    const [open, setOpen] = useState(false);

    const handleEventPersons = eventPeople.persons.map((currentPerson) => {
        if(currentPerson){

            return (
                <ul>
                    <h4>{currentPerson.name}</h4>
                    <li>Nationality: {currentPerson.nationality}</li>  
                    <li>Birth: {currentPerson.birthDate}</li>
                    <li>Death: {currentPerson.deathDate}</li>  
                </ul>
        )
        }
    })

    

      return (
        <VerticalTimeline
             layout={'2-columns'}
             animate={true}
             >
                <VerticalTimelineElement
                    key={eventPeople.key}
                    date={eventPeople.date}
                    dateClassName="date"
                    iconStyle={{ background: 'black', color: 'white'}}
                    icon={<div className="chessKing"><i class="chess king icon"></i></div>}
                >
                    
                    <h3 className="vertical-timeline-element-title">{eventPeople.name}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{eventPeople.location.name}</h4>
                    <p id="description">{eventPeople.description}</p>
        
                        <Modal
                            onClose={()=>setOpen(false)}
                            onOpen={()=>setOpen(true)}
                            open={open}
                            trigger={<Button>Show People</Button>}
                        >
                            <Modal.Header>{eventPeople.name}</Modal.Header>
                                <Modal.Content image>
                                <Image size='large' src='https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80' wrapped />
                                    <Modal.Description>
                                        <Header>
                                        <i class="chess knight icon"></i>
                                            Participants
                                        </Header>
                                        <p>
                                            {handleEventPersons}
                                        </p>
                                        </Modal.Description>
                                </Modal.Content>
                            <Modal.Actions>
                           {/* <Button color='black' onClick={() => setOpen(false)}>
                                Nope
                                </Button>  */}
                             <Button
                                content="Done"
                                labelPosition='right'
                                icon='checkmark'
                                onClick={()=>setOpen(false)}
                                positive
                            
                                /> 
                            </Modal.Actions>
                        </Modal> 
            </VerticalTimelineElement>
    </VerticalTimeline>
    );
      
      
}

export default PersonDetails;