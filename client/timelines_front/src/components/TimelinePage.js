import {useEffect, useState} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const TimelinePage = ({events}) => {
    
    // const [timelineEvents, setTimelineEvents] = useState([])

    // TODO styles for battle event and non-battle-evetn, can be done in TimelinePage.css

    return (
        <>
            <VerticalTimeline>
            {events.map(event => {
                // let isBattleIcon - event.type ===="work";
                // conditional logic for hasPersonList to see if the event has a list of person to then
                // make the list of people button show up

                return(
                    <VerticalTimelineElement
                        ket={event.key}
                        date={event.date}
                        dateClassName="date"
                        // iconStyle={isBattleIcon ? battleIconStyle : non-battleIconStyle}
                        // icon={isBattleIcon ? <BattleIcon/> :<non-battleIcon/>}
                    >
                        <h3 className="eventName">{event.name}</h3>
                        <h5 className="eventLocation">{event.location}</h5>
                        <p id="description">{event.description}</p>
                        <button>People</button> 
                        {/* this should have a popup for a list of people at the event */}
                    </VerticalTimelineElement>
                );
            })}
            </VerticalTimeline>
        </>
    )
}

export default TimelinePage;