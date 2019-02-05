import React, { Component } from 'react';
//import Matka from './components/Matka';
//import Matkalomake from './components/Matkalomake';
import Matkalista from './components/Matkalista';

//const mat = { otsikko: 'Lomalla', paiva: '14.1.2019', paikka: 'Helsinki', saa: 'Sateinen, -1', kuvaus: 'Tunnilla koodaamassa' }
const mat = [
  { otsikko: 'Lomalla',
    paiva: '26.2.2018',
    paikka: 'Lohja',
    saa: 'Sateinen, -1',
    kuvaus: 'Lomalla Lohjalla'
  },
  { otsikko: 'Töissä',
    paiva: '8.1.2019',
    paikka: 'Helsinki',
    saa: 'Pieni lumisade, -1',
    kuvaus: 'Töissä Helsingissä'
  },
  { otsikko: 'Lounaalla',
    paiva: '20.1.2019',
    paikka: 'Lohja',
    saa: 'Pilvinen, -7',
    kuvaus: 'Sukuloimassa'
  }
];

class MatkaApp extends Component {
  render() {
    return (
      <div>
        {
      	/*
      	 <Matka matka={ mat } />
          <Matkalomake />
      	*/
      	}
        <Matkalista  matkat={ mat }/>
      </div>
    );
  }
}

export default MatkaApp;
