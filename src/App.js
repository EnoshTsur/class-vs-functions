import React, { Component, } from 'react';
import Header from './components/Header/Header'
import Signup from './components/Signup/Signup'

class App extends Component {

  state = {
    user: null
  }

  setUser = user => {
    this.setState({ user, })
  }

  render() {

    const { user, } = this.state

    return (
      <div>
        <Header user={user} />
        <Signup setUser={this.setUser}/>
      </div>
    )

  }

}

export default App;
