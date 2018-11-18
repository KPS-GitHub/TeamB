import React, { Component } from 'react'
import { Row, Column } from 'simple-flexbox'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Column vertical='space-around' horizontal='center'>

          {/* title row */}
          <Row vertical='center' horizontal='center'>

          </Row>

          {/* main content/k&c profiles */}
          <Row vertical='center' horizontal='space-around'>

          </Row>

          {/* sidekick profiles */}
          <Row vertical='center' horizontal='space-around'>

          </Row>
          
        </Column>
      </div>
    )
  }
}

export default App
