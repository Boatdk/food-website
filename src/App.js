import React , {useState, useEffect} from 'react';
import {firestore} from './index'
import Navbar from './Component/Navbar/Navbar'
import Content from './Component/Content/Content'
import FoodList from './Component/Food-list/FoodList'
import Login  from './Component/Login/Login'
import Signup from './Component/Signup/Signup'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import { Routes, Route, useRoutes } from 'react-router-dom';
import './App.css'

function App() {

  const [foods, setFoods] = useState([])
  const [items, setItems] = useState([''])
  const [name, setName] = useState([''])
  const [calories, setCalories] = useState([''])

  const renderFood = () => {
    return foods.map((food, index) => {
      return (
        <FoodList key={index} food={food} deleteFood={deleteFood} />
      )
    })
  }

  useEffect(() => {
    retrieveFood()
    retriveItem()
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
    console.log("id: ", id)
    firestore.collection('Foods').doc(id+'').set({id, name, calories})
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

  const renderItem = () => {
    return items.map( (bag, index) => {
      // console.log(bag.item)
      
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