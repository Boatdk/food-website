const foodReducer = (state=[], action) => {
  switch(action.type){
    case 'GET_FOOD_SUCCESS':
      console.log('action:', action.foods)
      return [...state, action.foods]
    case 'GET_FOOD_FAIL':
      console.log("FAIL")
      return action.foods
    case 'ADD_FOOD_SUCCESS':
      console.log("ADD SUCCESS")
      return action.foods
    case 'ADD_FOOD_FAIL':
      return action.foods
    default:
      return state
  }
}

export default foodReducer
