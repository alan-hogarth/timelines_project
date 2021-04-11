import { List, Segment, Grid }from 'semantic-ui-react';
import Event from "./FilteredEvent";

const Eventlist = ({filteredEvents, deleteEntry}) => {

    if (!filteredEvents){
        return <span>SOMETHING AINT RIGHT</span>;
    } else {

        const eventNodes = filteredEvents.map((object, index) => {
            return (
                <> 
                    <Event filteredEvent={object} key={index} deleteEntry={deleteEntry} />
                </>
                
            );
        })

        return(
            <>
            <ul>
            {eventNodes}
            </ul>
            </>
        )
    }

}
export default Eventlist;