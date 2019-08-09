import React, { useState } from 'react'

import Form from './components/Form'
import './App.scss'

function App() {
  const [user, setUser] = useState({ username: '', password: '' })

  return (
    <div className="wrapper">
      <header>
        <h1>Form Management</h1>
      </header>
      <Form setUser={setUser} />
      <div>
        <h2>{user.username}</h2>
      </div>
    </div>
  )
}

export default App
