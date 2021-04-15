import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {useState} from "react";

const PersonDetails = ({event}) => {

    const [open, setOpen] = useState(false);

    const handleEventPersons = event.persons.map((currentPerson) => {
        return (
            <ul>
                    <li>Name: {currentPerson.name}</li>
                    <li>Nationality: {currentPerson.nationality}</li>  
                    <li>Birth: {currentPerson.birthDate}</li>
                    <li>Death: {currentPerson.deathDate}</li>  
                </ul>
        )
    })
   
    

      return (
        <VerticalTimeline>
                <VerticalTimelineElement
                    key={event.key}
                    date={event.date}
                    dateClassName="date"
                
                >
                    <h3 className="vertical-timeline-element-title">{event.name}</h3>
                    <h5 className="vertical-timeline-element-subtitle">{event.location.name}</h5>
                    <p id="description">{event.description}</p>
        

                        <Modal
                        onClose={()=>setOpen(false)}
                        onOpen={()=>setOpen(true)}
                        open={open}
                        trigger={<Button>Show People</Button>}
                        >
                        <Modal.Header>{event.name}</Modal.Header>
                        <Modal.Content image>
                        <Image size='large' src='https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80' wrapped />
                            <Modal.Description>
                            <Header>Participants</Header>
                            <p>
                          {handleEventPersons}
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