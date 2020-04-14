import React from 'react'
import './FoodList.css'

export default (props) => {
  const { food, deleteFood } = props
  const { id, name, calories } = food
  return (
    <li>
      <div className="name">
        {name}
      </div>
      <div>
        มี {calories} calories 
      </div>
      <button onClick={ () => deleteFood(id)}>delete</button>
    </li> 
  )
}