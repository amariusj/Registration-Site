import React from 'react';
import Speaker from './Speaker';
import { Consumer } from './Context';

const Speakers = () => {
  return(
    <Consumer>
      { ({ speakers }) => {
        return(
          <React.Fragment>
            <h1 id="speakers" className="display-4 text-center my-5 text-muted">Speakers</h1>
            <div className="row">
              {speakers.map( (speaker, index) =>
                <Speaker
                  description={speaker.description}
                  id={speaker.id}
                  image={speaker.image}
                  name={speaker.name}
                  index={index}
                  key={speaker.id.toString()}
                />
              )}
            </div>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
}

export default Speakers;
