import authReducer from "../../reducers/auth"

test("should set uid for login ",()=>{
  const action={
      type:"LOGIN",
      uid:"5"
  }
  const state=authReducer({},action)
  expect(state).toEqual({
      uid:"5"
  })
})

test("should clear uid for logout ",()=>{
  const action={
      type:"LOGOUT"
  
  }
  const state=authReducer({},action)
  expect(state).toEqual({
  
  })
})
