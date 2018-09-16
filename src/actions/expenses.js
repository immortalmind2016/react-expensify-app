import uuid from "uuid"
import database from "../firebase/firebase"
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// component calls action generator
// action generator returns function
// component dispatches function(?)
// function runs (has the ability to dispatch other actions and do whateve it wants)


// ADD_EXPENSE - Action generator
export const addExpense=(expense)=>({
    type:"ADD_EXPENSE",
    expense
})
// this wrong by default so we added redux thunk to go well with it
export const startAddExpense=(expenseData={})=>{
    return (dispatch)=>{
        const{   // destructure
        description='',
        note='',
        amount=0,
        createdAt=0
    } = expenseData;
    const expense={description,note,amount,createdAt}
    return database.ref("expenses").push(expense).then((ref)=>{
      dispatch(addExpense({
          id:ref.key,
          ...expense
      }));
    })    
    }
}

// REMOVE_EXPENSE
export const removeExpense=({id})=>({
    type:"REMOVE_EXPENSE",
    id

})

// EDIT_EXPENSE
export const editExpense=(id,updates)=>({
    type:"EDIT_EXPENSE",
    id,
    updates

})


// SET_EXPENSES
export const setExpenses=(expenses)=>({
    type:"SET_EXPENSES",
    expenses
})
export const startSetExpenses=()=>{
    let expenseData={}
    return (dispatch)=>{
        beforeEach((done)=>{
            expensesData.forEach(({id,description,note,amount,createdAt})=>{
            expenseData[id]={
                description,
                note,
                amount,
                createdAt
            }

        })
                })
        let data=[]
       return  database.ref('expenses').once("value").then((snapshot)=>{
           snapshot.forEach((childSnapshot)=>{
               data.push({
                   id:childSnapshot.key,
                   ...childSnapshot.val()
               })
           })
          
        dispatch(setExpenses(data))
          
       })
    
    
      
    }
}