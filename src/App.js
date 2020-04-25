import React , {useState, useEffect} from 'react';
import {firestore} from './index'
import Navbar from './component/Navbar/Navbar'
import Content from './component/Content/Content'
import Login  from './component/Login/Login'
import Signup from './component/Signup/Signup'
import Home from './component/Home/Home'
import About from './component/About/About'
import Form from './component/Form/Form'
import { Routes, Route } from 'react-router-dom';

import './App.css'

const App = () => {

  const [foods, setFoods] = useState([])
  const [items, setItems] = useState([''])
  const [name, setName] = useState([''])
  const [calories, setCalories] = useState([''])

  // const renderFood = () => {
  //   return foods.map((food, index) => {
  //     return (
  //       <FoodList key={index} food={food} deleteFood={deleteFood} />
  //     )
  //   })
  // }

  useEffect(() => {
    // retrieveFood()
    // retriveItem()
  }, [])

  const retrieveFood = () => {
    firestore.collection('Foods').onSnapshot( (snapshot) => {
      let allFood = snapshot.docs.map( index => {
        const {id, name, calories} = index.data()
        return {id, name, calories}
      })
      setFoods(allFood)
    })
  }

  const addFood = () => {
    let id
    console.log(foods.length)
    if(foods.length === 0){
      id = 1
    }else{
      id = foods.length + 1
    }
    console.log("id: ", id, foods)
    // firestore.collection('Foods').doc(id+'').set({id, name, calories})
  }

  const deleteFood = (id) => {
    firestore.collection('Foods').doc(id+'').delete()
  }

  const addItem = (foodName, foodCalories) => {
    let id = 1
    let item = [{name: foodName, calories: foodCalories}]
    firestore.collection('Users').doc(id+'').set({id, item})
  }

  const retriveItem = () => {
    firestore.collection('Users').onSnapshot( (snapshot) => {
      let myItem = snapshot.docs.map( index => {
        const {id, item} = index.data()
        return {id, item}
      })
      setItems(myItem)
    })
  }
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

      // {/* <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
      // <input type="text" name="calories" onChange={(e) => setCalories(e.target.value)} />
      // <button onClick={addFood}>ADD</button>
      // <div>
      //   ข้อมูลรายการอาหารทั้งหมด
      //   <ul style={{ display: 'flex', listStyle: 'none'}}>
      //   { renderFood() }
      //   </ul>
      // </div>
      // <div>
      //   รายการอาหารของคุณ
      //   { renderItem() }
      // </div> */}

