import React, { Component, } from 'react';
import Header from './components/Header/Header'
import Signup from './components/Signup/Signup'

class App extends Component {

  state = {
    user: null
  }

  render() {

    const { user, } = this.state

    return (
      <div>
        <Header user={user} />
        <Signup />
      </div>
    )

  }

}

export default App;
