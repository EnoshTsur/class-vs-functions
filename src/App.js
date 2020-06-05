import React, { Component, } from 'react';
import Header from './components/Header/Header'

class App extends Component {

  state = {
      user: {
        name: "enosh",
        city: 'eilat'
      }
  }

  render() {

    const { user, } = this.state

    return (
      <div>
       <Header user={user}/>
      </div>
    )

  }

}

export default App;