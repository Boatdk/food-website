import React, {useState} from 'react'
import './FoodInput.css'
import { firestore } from '../../index'



const FoodInput = () => {
  const [food, setFood] = useState([''])
  const addFood = () => {
    let id
  }

  return (
    <div className="food-form">
      <div>
        <label>อาหาร: </label>
        <input type="text" name="Food" className="form-input" />
      </div>
      <div>
        <label>จำนวนแคลอรี่: </label>
        <input type="text" name="Cal"  className="form-input" />
      </div>
      <button>เพิ่ม</button>
    </div>
  )
}

export default FoodInput