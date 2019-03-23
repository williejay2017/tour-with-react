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

steps : Array  - Required
confirmCancel : boolean
confirmCancelMsg : string
defaultStepOptions : object
tourName : string
useModalOverlay : boolean

## Important

The steps prop is the only prop that is required. Steps prop should take an array of steps.

## License

MIT © [williejay2017](https://github.com/williejay2017)
