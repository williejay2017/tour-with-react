import React, { Component } from 'react';
import {TourGuide } from 'tour-with-react';
import steps from './steps';
import 'shepherd.js/dist/css/shepherd-theme-dark.css';

const stepOptions = {
  showCancelLink: true,
  classes: 'shepherd-theme-square'
}

const divStyle = {
  display: 'flex',
  justifyContent: 'center'
}

const theme = {
  display: 'inline-block',
  borderRadius: '3px',
  padding: '0.5rem 0',
  margin: '0.5rem 1rem',
  width: '11rem',
  background: 'transparent',
  color: 'black',
  border: '2px solid black',
  font: 'Comic Sans MS'
}

export default class App extends Component {
  render () {
    return (
      <div className = 'test' style={divStyle}>
        <TourGuide defaultStepOptions={stepOptions} steps={steps} useModalOverlay={false} text={'Test Tour Props'} theme={theme}/>
      </div>
    )
  }
}

