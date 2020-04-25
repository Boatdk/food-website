import React, { useState } from 'react'
import { connect } from 'react-redux'

const Form = () => {

  const [name, setName] = useState([''])
  const [calories, setCalories] = useState([''])
  const [foods, setFoods] = useState([''])

  const addFood = () => {
    console.log("data: ", name, calories)
    const data = {
      foodName: name,
      calories: calories
    }
    this.props.dispatch({
      type:  'ADD_FOOD',
      data: data
    })
  }

  return (
    <div>
      <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
      <input type="text" name="calories" onChange={(e) => setCalories(e.target.value)} />
      <button onClick={addFood}>ADD</button>
    </div>
  )
}

export default connect()(Form)