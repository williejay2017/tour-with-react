import React, { Component } from 'react';
import {TourGuide } from 'tour-with-react';
import steps from './steps';

export default class App extends Component {
  render () {
    return (
      <div className = 'test'>
        <TourGuide defaultStepOptions={{ showCancelLink: true }} steps={steps} useModalOverlay={false}/>
      </div>
    )
  }
}

