import configureMockStore from "redux-mock-store"
import {addExpense,editExpense,removeExpense,setEditExpense,startRemoveExpense,startAddExpense,setExpenses,startSetExpenses} from "../../actions/expenses"
import thunk from "redux-thunk";
import database from "../../firebase/firebase"
import expenses from "../fixtures/expenses"
const createMockStore=configureMockStore([thunk]);
beforeEach((done)=>{
  const expenseData={}
  expenses.forEach(({id,description,note,amount,createdAt})=> {
    expenseData[id]={
      description,note,amount,createdAt
    };
  });
  database.ref("expenses").set(expenseData).then(()=>{
    done();
  })
})
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
  const expenseData={
        description:"rent",
        amount:100,
        createdAt:1000,
        note:"this was last months rend"

    }
test("should setup Add Expense action with provided values",()=>{
  
  const action=addExpense(expenseData);
  expect(action).toEqual({
      type:"ADD_EXPENSE",
      expense:
        {
          ...expenseData

        
        }

  })
})
// to force jest to wait and avoid asynchronous use  done 
test("should add expense to database and store",(done)=>{
   const store=createMockStore({})
   store.dispatch(startAddExpense(expenseData)).then(()=>{
     const actions=store.getActions(); // return acction -> addExpense
     expect(actions[0]).toEqual({
       type:"ADD_EXPENSE",
       expense:{
         id:expect.any(String),
         ...expenseData
       }
     })
     return database.ref(`expenses/${actions[0].expense.id}`).once("value")
   
   }).then((snapshot)=>{
       expect(snapshot.val()).toEqual(expenseData);  done();
     })

})
test("should add expense with defaults to database and store",(done)=>{
   const store=createMockStore({})
   store.dispatch(startAddExpense({})).then(()=>{
     const actions=store.getActions(); // return acction -> addExpense
     expect(actions[0]).toEqual({
       type:"ADD_EXPENSE",
       expense:{
         id:expect.any(String),
         description:"",
         amount:0,
         createdAt:0,
         note:""
       }
     })
     return database.ref(`expenses/${actions[0].expense.id}`).once("value")
   
   }).then((snapshot)=>{
       expect(snapshot.val()).toEqual({
         description:"",
         amount:0,
         createdAt:0,
         note:""
       });  done();
     })
})

test('should setup set Expense action object with data',()=>{
   const action=setExpenses(expenses)
   expect(action).toEqual({
     type:"SET_EXPENSES",
     expenses
   })
})
test("should test start Set expenses action object",(done)=>{
    const store=createMockStore({})
    store.dispatch(startSetExpenses()).then(()=>{
    const action =store.getActions()
  return action
    }).then((action)=>{
  
  expect(action[0]).toEqual({expenses,type:"SET_EXPENSES"})
  done()
    })



})

test('should Remove expenses action object',(done)=>{
  const store=createMockStore()
  
  store.dispatch(startRemoveExpense({id:"1"})).then(()=>{
    
      const action=store.getActions()
     expect(action[0]).toEqual({id:expenses[0].id,type:"REMOVE_EXPENSE" })
      done(0)

  
  })
})

test("should test edit expense object action",(done)=>{
const store=createMockStore()
store.dispatch(setEditExpense("1",{description:"hello test"})).then(()=>{
  const action=store.getActions()
     expect(action[0]).toEqual({updates:{description:"hello test"},id:expenses[0].id,type:"EDIT_EXPENSE" })
 done()

})

})
/*
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
})*/
//use toEqual with arrays and Objects