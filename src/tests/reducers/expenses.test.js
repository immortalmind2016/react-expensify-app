import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"
const currentStates=[{
    id:"1",
    description:"",
    createdAt:0,
    amount:0,
    note:"this testo"
 
},{
 id:"2",
    description:"test",
    createdAt:0,
    amount:0,
    note:"this testo"
}]
test("should Test Add new Expense ",()=>{
      const currentStates=[{
        id:"1",
        description:"",
        amount:50,
        createdAt:0,
        note:"this is test one"
     
    }]
    const newState={
        id:"2",
        description:"rent",
        amount:50,
        createdAt:0,
        note:"this is rent expense"
     
    }
    const action={type:"ADD_EXPENSE",expense:newState}
    const state=expensesReducer(currentStates,action) 
    expect(state).toEqual([...currentStates,newState])
})


test("should test Edit Expense",()=>{
const updates={
        description:"ahmed",
        amount:50
    }

    const action={type:"EDIT_EXPENSE",id:"1",updates}
    const state=expensesReducer(currentStates,action)
    expect(state).toEqual([{...currentStates[0],...updates},currentStates[1]])

})


test("should test Edit Expense",()=>{
    const updates={
            description:"ahmed",
            amount:50
        }
        
        const action={type:"EDIT_EXPENSE",id:"1",updates}
        const state=expensesReducer(currentStates,action)
        expect(state).toEqual([{...currentStates[0],...updates},currentStates[1]])
    
    })

    test("should test REMOVE Expense",()=>{
   
            const action={type:"REMOVE_EXPENSE",id:"1"}
            const state=expensesReducer(currentStates,action)
            expect(state).toEqual([currentStates[1]])
        
        })

  test("should set expenses ",()=>{
      const action={
          type:"SET_EXPENSES",
          expenses:[expenses[0]]
      }
      const state=expensesReducer(expenses,action);
      expect(state).toEqual([expenses[0]])
  })