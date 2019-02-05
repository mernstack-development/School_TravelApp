import React, { Component } from 'react';

class Astroidit extends Component {
  constructor (props) {
      super(props);
      this.state= { astroidiTaulukko:[], virhe: '' };
  }

  componentDidMount = () => {
    fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-01-05&end_date=2019-01-05&api_key=DEMO_KEY')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                astroidiTaulukko: responseJson.near_earth_objects["2019-01-05"],
                virhe: ''
            });

        })
        .catch((error) => {
            console.error(error);
			      this.setState({virhe: 'Tietojen haku ei onnistunut'})
        })
  }

  render() {
    const astroidit = this.state.astroidiTaulukko.map(function(asteroid, index) {
      return (
        <div key={index}>
          {asteroid.name}, {asteroid.close_approach_data[0].miss_distance.kilometers} km
        </div>
      )
    });
    return(
      <div>
        { astroidit } <br/>
        { this.state.virhe }
      </div>
    );
  }
}

export default Astroidit;
