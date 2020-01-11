import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'

const propTypes = {
  prop: PropTypes
}

export default class App extends Component {

  render() {
    return (
      <div>
        <Counter />
      </div>
    )
  }
}

App.propTypes = propTypes;