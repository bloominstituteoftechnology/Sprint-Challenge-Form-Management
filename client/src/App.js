import React, { useState } from 'react'

import FormikForm from './components/InputForm'
import FoodCard from './components/FoodCard'

function App() {
  const [foods, setFoods] = useState([])

  return (
    <div>
      <FormikForm foods={foods} setFoods={setFoods}/>

      <div>
        {foods.map(food => (
          <FoodCard key={Date.now()} food={food} />
        ))}
      </div>
    </div>
  )
}

export default App
