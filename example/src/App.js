import React, { Component } from 'react';
import {TourGuide } from 'tour-with-react';
import steps from './steps';
import 'shepherd.js/dist/css/shepherd-theme-dark.css';

const stepOptions = {
  showCancelLink: true,
  classes: 'shepherd-theme-square'
}

export default class App extends Component {
  render () {
    return (
      <div className = 'test'>
        <TourGuide defaultStepOptions={stepOptions} steps={steps} useModalOverlay={false}/>
      </div>
    )
  }
}

