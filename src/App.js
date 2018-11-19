import React, { Component } from 'react'
import { Row, Column } from 'simple-flexbox'
import styled from 'styled-components'

let Title = styled.h1`
  text-align: center;
  font-size: 5vh;
  height: 20vh;
  width: 100vw;
  padding-top: 10vh;
  margin-top: 0;
  background-color: pink;
`

class App extends Component {
  render() {
    return (
        <Column vertical='space-around' horizontal='center'>

          {/* title row */}
          <Row vertical='center' horizontal='center'>
            <Title>Team Bitch</Title>
          </Row>

          {/* main content/k&c profiles */}
          <Row vertical='center' horizontal='space-around'>

          </Row>

          {/* sidekick profiles */}
          <Row vertical='center' horizontal='space-around'>

          </Row>

        </Column>
    )
  }
}

export default App
