// create your App component here
import React, { Component } from 'react'

class App extends React.Component {

  render() {
    return (
      <div>
      </div>
    )
  }

  componentDidMount() {
    fetch('')
    .then(response => response.json())
    .then(data => {

    })
  }
}

export default App
