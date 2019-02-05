import React, { Component } from 'react';
import './tyylit.css';

class Matkalomake extends Component {
  constructor(props) {
    super(props);
    this.state= {otsikko: '', paiva: '', paikka: '', saa: '', kuvaus: '' };
  }

  muutaOtsikko = (e) => {
    this.setState( { otsikko: e.target.value.toUpperCase() } );
  }

  muuta = (e) => {
      this.setState( { [e.target.name]: e.target.value} );
  }

  lisaa = (e) => {
    e.preventDefault();
  }

  tyhjenna = (e) => {
    e.preventDefault();
    this.setState( { otsikko: '', paiva:'', paikka:'', saa:'', kuvaus: ''} );
  }

  render() {
    return (
      <form >
        <label className="sininen" htmlFor='otsikko' style={styles.labelStyle}>Otsikko</label>
        <input type='text' name='otsikko' value={this.state.otsikko} onChange={this.muutaOtsikko} />
        <br />
        <label htmlFor='paiva' style={styles.labelStyle}>Päivä</label>
        <input type='text' name='paiva' value={this.state.paiva} onChange={this.muuta} />
        <br />
        <label htmlFor='paikka' style={styles.labelStyle}>Paikka</label>
        <input type='text' name='paikka' value={this.state.paikka} onChange={this.muuta} />
        <br />
        <label htmlFor='saa' style={styles.labelStyle}>Sää</label>
        <input type='text' name='saa' value={this.state.saa} onChange={this.muuta} />
        <br />
        <label htmlFor='kuvaus' style={styles.labelStyle}>Kuvaus</label>
        <textarea name='kuvaus' rows='4' cols='40' value={this.state.kuvaus} onChange={this.muuta}></textarea>
        <br />
        <input type='button' value='Lisää' onClick={this.lisaa} />
        &nbsp;
        <input type='button' value='Tyhjennä' onClick={this.tyhjenna} />
      </form>
    );
  }
}

const styles = {
  labelStyle: {
    width: '8em',
    display: 'block',
    float: 'left',
  },
};

export default Matkalomake;
