# tour-with-react

> tour guide that uses shepherd for react

[![NPM](https://img.shields.io/npm/v/tour-with-react.svg)](https://www.npmjs.com/package/tour-with-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tour-with-react
```

## Usage

```jsx
import React, { Component } from 'react'
import {TourGuide } from 'tour-with-react';


class ClassName extends Component {
  render () {
    return (
      <TourGuide {...props} />
      {this.props.children}
    )
  }
}
```

## Props

steps : Array  - Required <br />
confirmCancel : boolean <br />
confirmCancelMsg : string <br />
defaultStepOptions : object <br />
tourName : string <br />
useModalOverlay : boolean <br />
theme : object <br />
text: string <br />

## Important

The steps prop is the only prop that is required. Steps prop should take an array of steps.

Example of steps - <br />
<br />
```js
const steps = [
    {
        id: 'Tour Test',
        options: {
            title: 'Test',
            text:  'This is a test of tour guide',
            attachTo: '.test bottom',
            buttons: [
                {
                  type: 'back',
                  text: 'Back'
                }, {
                  type: 'next',
                  text: 'Next'
                }
              ]
        }
    }
]
```

Theme example for styling your start tour button <br />
```js
const theme = {
  display: 'inline-block',
  borderRadius: '3px',
  padding: '0.5rem 0',
  margin: '0.5rem 1rem',
  width: '11rem',
  background: 'transparent',
  color: 'white',
  border: '2px solid black',,
}

export default class App extends Component {
  render () {
    return (
      <div className = 'test'>
        <TourGuide defaultStepOptions={stepOptions} steps={steps} useModalOverlay={false} text={'Button Text'} theme={theme}/>
      </div>
    )
  }
```

## Dependencies
```bash
styled-components  install via :  npm install --save styled-components 
```

## License

MIT © [williejay2017](https://github.com/williejay2017)
