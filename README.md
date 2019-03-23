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

## License

MIT © [williejay2017](https://github.com/williejay2017)
