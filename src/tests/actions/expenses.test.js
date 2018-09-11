import {addExpense,editExpense,removeExpense} from "../../actions/expenses"

test("should setup remove Expense action object",()=>{
  const action=removeExpense({id:"123abc"});
  expect(action).toEqual({
      type:"REMOVE_EXPENSE",
      id:"123abc"
  })
})
test("should setup Edit Expense action object",()=>{
  const action=editExpense("123abc",{description:"rent",amount:100,createdAt:0});
  expect(action).toEqual({
      type:"EDIT_EXPENSE",
      id:"123abc",
      updates:{
          description:"rent",
          amount:100,
          createdAt:0
      }

  })
})

test("should setup Add Expense action with provided values",()=>{
    const expenseData={
        description:"rent",
        amount:100,
        createdAt:1000,
        note:"this was last months rend"

    }
  const action=addExpense(expenseData);
  expect(action).toEqual({
      type:"ADD_EXPENSE",
      expense:
        {
          ...expenseData,
          id:expect.any(String)
          
        }

  })
})


test("should setup Add Expense action with default values",()=>{
     const expenseData={
        description:"",
        amount:0,
        createdAt:0,
        note:""

    }
  const action=addExpense();
  expect(action).toEqual({
      type:"ADD_EXPENSE",
      expense:
        {
          ...expenseData,
          id:expect.any(String)
          
        }

  })
})
//use toEqual with arrays and Objects