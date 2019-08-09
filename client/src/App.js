import React, { useState } from 'react'

import FormikForm from './components/InputForm'

function App() {
  const [users, setUsers] = useState([])

  return (
    <div>
      <FormikForm users={users} setUsers={setUsers}/>
    </div>
  )
}

export default App
