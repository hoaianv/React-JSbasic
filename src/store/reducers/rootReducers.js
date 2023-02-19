const initState = {
  users: [
    {
      id: 1,
      name: 'Ronaldo',
    },
    {
      id: 2,
      name: 'Hoai An',
    },
  ],
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      console.log('Check data action', action)
      let users = state.users
      users = users.filter((item) => item.id !== action.pay.id)

      return {
        ...state,
        users,
      }
    default:
      break
  }
  return state
}

export default rootReducer
