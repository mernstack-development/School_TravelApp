import React  from 'react';

function Matkalista (props) {
  let matkoja = props.matkat.map( function(matka, index) {
    return (<p key={index}>
              Otsikko: { matka.otsikko }<br />
              Paikkakunta: { matka.paikkakunta }<br />
              Päivä: { matka.paiva }<br />
              Sää: { matka.saa }<br />
              Kuvaus: { matka.kuvaus }
            </p>);
  });
  return ( <div>{ matkoja }</div> );
}

export default Matkalista;
