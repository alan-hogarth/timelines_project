import { Segment } from 'semantic-ui-react';
import React from 'react';

const PokedexHeader = ({name}) => {
  
    return (
        <Segment basic inverted padded='very'>
          <h1 className="ui massive center aligned header">
            <span>
              <i class="chess king icon"></i><br></br>  Historical Timelines  
            </span>
          </h1>
          <h3 className="ui center aligned header">  {name} </h3>
        </Segment>
        
    )
} 

export default PokedexHeader;