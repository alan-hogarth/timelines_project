
import { List, Button, Grid, Segment } from 'semantic-ui-react'
import {useState} from "react";


const Event = ({filteredEvent, deleteEntry, setEventDetails}) => {


    const deleteButton = () => {
        deleteEntry(filteredEvent.id)
        console.log(filteredEvent)
        setEventDetails(filteredEvent.id === null)
    }

    return (
        <div>
            <Segment>
                <List.Content>
                    <List.Icon name='chess knight' />

                        <List.Header as='h3'>{filteredEvent.name}</List.Header>
                        <List.Content floated="right">{filteredEvent.date}: </List.Content>
                        <List.Description>
                        {filteredEvent.description}
                        </List.Description><br></br>
                            <Button secondary onClick={deleteButton}>Delete Event</Button>

                </List.Content>
            </Segment>
        
        </div>
        
    
    )



}
export default Event;