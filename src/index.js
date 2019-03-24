import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shepherd from 'shepherd.js';
import StartButton from './Button/StartButton';
import 'shepherd.js/dist/css/shepherd-theme-dark.css';

const methods = [
  'back',
  'cancel',
  'complete',
  'hide',
  'next',
  'show',
  'startTour'
]

const TourContext = React.createContext()
const TourContextConsumer = TourContext.Consumer

class Tour extends Component {
  static propTypes = {
    children: PropTypes.node,
    confirmCancel: PropTypes.bool,
    confirmCancelMsg: PropTypes.string,
    defaultStepOptions: PropTypes.object,
    tourName: PropTypes.string,
    steps: PropTypes.array.isRequired,
    useModalOverlay: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    window.Shepherd = Shepherd
    this._bindMethods(methods)
    const {
      confirmCancel,
      confirmCancelMessage,
      defaultStepOptions,
      tourName,
      useModalOverlay,
      steps,
    } = this.props

    this.state = {
      theme : props.theme,
      text : props.text,
    }

    const tourObject = new Shepherd.Tour({
      confirmCancel,
      confirmCancelMessage,
      defaultStepOptions,
      tourName,
      useModalOverlay,
    })

    this.startTourGuide = this.startTourGuide.bind(this);
    tourObject.on('start', this.onTourStart.bind(this))
    tourObject.on('complete', this.onTourFinish.bind(this), 'complete')
    tourObject.on('cancel', this.onTourFinish.bind(this), 'cancel')

    this.tourObject = tourObject
    this.tourState = {
      disableScroll: false,
      isActive: false,
      startTour: this.startTour,
    }

    this.addSteps(steps)
  }

  componentWillUnmount() {
    this._cleanup()
  }

  addSteps(steps) {
    const tour = this.tourObject

    if (steps.length == 0) {
      return []
    }

    steps.forEach((step, index) => {
      const { id, options } = step

      if (options.buttons) {
        options.buttons = options.buttons.map(
          button => {
            const { type, classes, text } = button
            return {
              action: tour[type],
              classes,
              text
            }
          }
        )
      }

      tour.addStep(id, options)

      const currentStep = tour.steps[index]

      if (!currentStep.options.scrollToHandler) {
        currentStep.options.scrollToHandler = (elem) => {

          this.tourState.disableScroll.off(window)

          if (typeof elem !== 'undefined') {
            elem.scrollIntoView()
          }

          setTimeout(() => {
            if (this.tourState.disableScroll) {
              this.tourState.disableScroll.on(window)
            }
          }, 50)
        }
      }
    })
  }

  back() {
    this.tourObject.back()
    Shepherd.trigger('back')
  }

  cancel() {
    this.tourObject.cancel()
  }

  complete() {
    this.tourObject.complete()
  }

  hide() {
    this.tourObject.hide()
  }

  next() {
    this.tourObject.next()
    Shepherd.trigger('next')
  }

  show(id) {
    this.tourObject.show(id)
  }

  startTour() {
    this.tourState.isActive = true
    this.tourObject.start()
  }

  onTourStart() {
    if (this.tourState.disableScroll) {
      this.tourState.disableScroll.on(window)
    }

    Shepherd.trigger('start')
  }


  onTourFinish(completeOrCancel) {
    this.tourState.isActive = false

    this._cleanup()
    Shepherd.trigger(completeOrCancel)
  }

  _bindMethods(methods) {
    methods.map((method) => {
      this[method] = this[method].bind(this)
    })
  }

  _cleanup() {
    if (this.disableScroll) {
      this.tourState.disableScroll.off(window)
    }
  }

  startTourGuide = () => {
    this.startTour();
  }

  render() {
    const {theme, text} = this.state;
    return (
      <TourContextConsumer.Provider value={this.tourState}>
        <StartButton onClick={this.startTourGuide} theme={theme} text={text}></StartButton>
      </TourContextConsumer.Provider>
    );
  }
}

export { Tour as TourGuide };