import React from 'react';
import Header from './components/Header/Header'
import Signup from './components/Signup/Signup'


export default function App () {

  const [ user, setUser, ] = React.useState(null)

    return (
      <div>
        <Header user={user} />
        {
          !user && <Signup setUser={setUser}/>
        }
      </div>
    )
}

