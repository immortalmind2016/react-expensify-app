//Expenses Reducer

const expensesReducerDefaultState=[];
const expensesReducer=(state=expensesReducerDefaultState,action)=>{
   switch (action.type){
        case "ADD_EXPENSE":
        return [   //for return for example array names=["ahmed","sd"] => [...names,"ali"]
                    // Called Array Spread Operator
            ...state,
            action.expense
        ]
        case "REMOVE_EXPENSE":
        console.log("REMOVE")
        return state.filter((key)=>{console.log("ACTION ID " + action.id);
        console.log("key ID " + key.id)
        return !(key.id==action.id)
    })  
       case "EDIT_EXPENSE":
        return state.map((expense)=>{
            if(expense.id===action.id){
            return{
                    ...expense,
                    ...action.updates
                    }
            }
            else{
                return expense
            }
        })
        case "SET_EXPENSES":
        return action.expenses
       default:return state;
   }
}

export default expensesReducer